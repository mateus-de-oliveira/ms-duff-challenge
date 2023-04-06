import { Test, TestingModule } from '@nestjs/testing';

import { CreateBeer } from './create-beer';
import { BeerRepository } from 'src/application/repositories/beers-repository';
import { BeerAlreadyExists } from './errors/beer-already-exists';

describe('Create Beer', () => {
  let sut: CreateBeer;
  let beerRepository: BeerRepository;

  beforeEach(async () => {
    const BeerRepositoryProvider = {
      provide: BeerRepository,
      useValue: {
        listAll: jest.fn(),
        listById: jest.fn(),
        listByName: jest.fn(),
        create: jest.fn(),
        delete: jest.fn(),
        listSuitableStyle: jest.fn(),
        update: jest.fn(),
      },
    };

    const app: TestingModule = await Test.createTestingModule({
      providers: [CreateBeer, BeerRepositoryProvider],
    }).compile();

    sut = app.get(CreateBeer);

    beerRepository = app.get(BeerRepository);
  });

  it('should be defined', () => {
    expect(sut).toBeDefined();
    expect(beerRepository).toBeDefined();
  });

  describe('execute', () => {
    it('should be created beer', async () => {
      const { beer } = await sut.execute({
        styleName: 'teste',
        minimumTemperature: -2,
        maximumTemperature: 4,
      });

      expect(jest.spyOn(beerRepository, 'listByName')).toBeCalledTimes(1);
      expect(jest.spyOn(beerRepository, 'create')).toBeCalledTimes(1);

      expect(beer).toBeTruthy();
      expect(beer).toHaveProperty('_id');
      expect(beer).toHaveProperty('props');
    });

    it('should throw a BeerAlreadyExists when beer exists', async () => {
      const beer: any = {
        id: '40bac2b3-2b1c-436f-a6e2-cd977018ed8f',
        styleName: 'teste',
        minimumTemperature: -2,
        maximumTemperature: 4,
        createdAt: new Date(),
      };

      jest.spyOn(beerRepository, 'listByName').mockResolvedValue(beer);

      await expect(
        sut.execute({
          styleName: 'teste',
          minimumTemperature: -2,
          maximumTemperature: 4,
        }),
      ).rejects.toThrow(BeerAlreadyExists);
    });
  });
});
