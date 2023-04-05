import { Beer } from '@application/entities/beer';

export abstract class BeerRepository {
  abstract listAll(): Promise<Beer | null>;
  abstract listById(beerId: string): Promise<Beer | null>;
  abstract create(beer: Beer): Promise<void>;
  abstract updated(beer: Beer): Promise<void>;
  abstract delete(beer: Beer): Promise<void>;
}
