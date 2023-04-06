import { Beer } from '@application/entities/beer';

export abstract class BeerRepository {
  abstract listAll(): Promise<Beer[] | null>;
  abstract listById(beerId: string): Promise<Beer | null>;
  abstract listByName(beerStyleName: string): Promise<Beer | null>;
  abstract create(beer: Beer): Promise<void>;
  abstract update(beerId: string, beer: Partial<Beer>): Promise<Partial<Beer>>;
  abstract delete(beerId: string): Promise<void>;

  abstract listSuitableStyle(temperature: number): Promise<Beer>;
}
