import { Test, TestingModule } from '@nestjs/testing';
import { BeerRepository } from 'src/application/repositories/beers-repository';
import { ListAllBeer } from './list-all-beer';

describe('List All Beer', () => {
  let sut: ListAllBeer;
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
      providers: [ListAllBeer, BeerRepositoryProvider],
    }).compile();

    sut = app.get(ListAllBeer);

    beerRepository = app.get(BeerRepository);
  });

  it('should be defined', () => {
    expect(sut).toBeDefined();
    expect(beerRepository).toBeDefined();
  });

  describe('execute', () => {
    it('should be list all beers', async () => {
      await sut.execute();

      expect(jest.spyOn(beerRepository, 'listAll')).toBeCalledTimes(1);
    });
  });
});
