import { Beer } from '@application/entities/beer';
import { BeerRepository } from '@application/repositories/beers-repository';
import { Injectable } from '@nestjs/common';
import { BeerNotFoundException } from './errors/beer-not-found';

interface UpdateBeerRequest {
  styleName?: string;
  minimumTemperature?: number;
  maximumTemperature?: number;
  createdAt?: Date;
}

@Injectable()
export class UpdateBeer {
  constructor(private readonly beerRepository: BeerRepository) {}

  async execute(beerId: string, request: UpdateBeerRequest) {
    const beer = await this.beerRepository.listById(beerId);

    if (!beer) {
      throw new BeerNotFoundException();
    }

    await this.beerRepository.update(beerId, request);
  }
}
