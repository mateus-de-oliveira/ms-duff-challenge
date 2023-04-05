import { Beer } from '@prisma/client';

export class BeerViewModels {
  static toHTTP(beer: Beer) {
    return {
      id: beer.id,
      minimumTemperature: beer.minimumTemperature,
      maximumTemperature: beer.maximumTemperature,
      createdAt: beer.createdAt,
    };
  }
}
