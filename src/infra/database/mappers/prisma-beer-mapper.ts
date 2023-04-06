import { Beer as RawBeer } from '@prisma/client';

import { Beer } from '@application/entities/beer';

export class PrismaBeerMapper {
  static toPrisma(beer: Beer) {
    return {
      id: beer.id,
      styleName: beer.styleName,
      minimumTemperature: beer.minimumTemperature,
      maximumTemperature: beer.maximumTemperature,
      roundedAverageTemperature: beer.roundedAverageTemperature,
      createdAt: beer.createdAt,
    };
  }

  static toDomain(raw: RawBeer): Beer {
    return new Beer(
      {
        styleName: raw.styleName,
        minimumTemperature: raw.minimumTemperature,
        maximumTemperature: raw.maximumTemperature,
        createdAt: raw.createdAt,
      },
      raw.id,
    );
  }
}
