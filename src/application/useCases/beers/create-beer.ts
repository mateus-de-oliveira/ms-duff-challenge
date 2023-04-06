import { Beer } from '@application/entities/beer';
import { BeerRepository } from '@application/repositories/beers-repository';
import { Injectable } from '@nestjs/common';

interface CreateBeerRequest {
  styleName: string;
  minimumTemperature: number;
  maximumTemperature: number;
  createdAt?: Date;
}

@Injectable()
export class CreateBeer {
  constructor(private readonly beerRepository: BeerRepository) {}

  async execute(request: CreateBeerRequest) {
    const { styleName, minimumTemperature, maximumTemperature } = request;

    const beer = new Beer({
      styleName,
      minimumTemperature,
      maximumTemperature,
    });

    await this.beerRepository.create(beer);

    return { beer };
  }
}
