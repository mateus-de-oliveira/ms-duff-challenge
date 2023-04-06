import { Beer } from '@application/entities/beer';

export abstract class BeerRepository {
  abstract listAll(): Promise<Beer | null>;
  abstract listById(beerId: string): Promise<Beer | null>;
  abstract create(beer: Beer): Promise<void>;
  abstract update(beer: Beer): Promise<Beer>;
  abstract delete(beerId: string): Promise<void>;
}
