import { Test, TestingModule } from '@nestjs/testing';
import { BeerRepository } from 'src/application/repositories/beers-repository';
import { BeerNotFoundException } from './errors/beer-not-found';
import { UpdateBeer } from './update-beer';

describe('Update Beer', () => {
  let sut: UpdateBeer;
  let beerRepository: BeerRepository;

  beforeEach(async () => {
    jest.clearAllMocks();

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
      providers: [UpdateBeer, BeerRepositoryProvider],
    }).compile();

    sut = app.get(UpdateBeer);

    beerRepository = app.get(BeerRepository);
  });

  it('should be defined', () => {
    expect(sut).toBeDefined();
    expect(beerRepository).toBeDefined();
  });

  describe('execute', () => {
    it('should be update beer', async () => {
      const beer: any = {
        id: '40bac2b3-2b1c-436f-a6e2-cd977018ed8f',
        styleName: 'teste',
        minimumTemperature: -2,
        maximumTemperature: 4,
        createdAt: new Date(),
      };

      jest.spyOn(beerRepository, 'listById').mockResolvedValue(beer);
      await sut.execute('teste id', { styleName: 'atualizado' });

      expect(jest.spyOn(beerRepository, 'listById')).toBeCalledTimes(1);
      expect(jest.spyOn(beerRepository, 'update')).toBeCalledTimes(1);
    });

    it('should throw a BeerNotFoundException when beer not exists', async () => {
      jest.spyOn(beerRepository, 'listById').mockResolvedValue(null);

      await expect(
        sut.execute('teste id', { styleName: 'atualizado' }),
      ).rejects.toThrow(BeerNotFoundException);
    });
  });
});
