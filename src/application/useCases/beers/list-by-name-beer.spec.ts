import { Test, TestingModule } from '@nestjs/testing';
import { BeerRepository } from 'src/application/repositories/beers-repository';
import { ListByNameBeer } from './list-by-name-beer';

describe('List By Name Beer', () => {
  let sut: ListByNameBeer;
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
      providers: [ListByNameBeer, BeerRepositoryProvider],
    }).compile();

    sut = app.get(ListByNameBeer);

    beerRepository = app.get(BeerRepository);
  });

  it('should be defined', () => {
    expect(sut).toBeDefined();
    expect(beerRepository).toBeDefined();
  });

  describe('execute', () => {
    it('should be list by name beer', async () => {
      await sut.execute('teste style name');

      expect(jest.spyOn(beerRepository, 'listByName')).toBeCalledTimes(1);
    });
  });
});
