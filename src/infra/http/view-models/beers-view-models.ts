import { Beer } from '@prisma/client';

export class BeerViewModels {
  static toHTTP(beer: Beer) {
    return {
      id: beer.id,
      styleName: beer.styleName,
      minimumTemperature: beer.minimumTemperature,
      maximumTemperature: beer.maximumTemperature,
      roundedAverageTemperature: beer.roundedAverageTemperature,
      createdAt: beer.createdAt,
    };
  }
}
