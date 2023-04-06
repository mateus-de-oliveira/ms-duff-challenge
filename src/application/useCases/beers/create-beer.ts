import { Beer } from 'src/application/entities/beer';
import { BeerRepository } from 'src/application/repositories/beers-repository';
import { Injectable } from '@nestjs/common';
import { BeerAlreadyExists } from './errors/beer-already-exists';

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
    const verifyIfAlreadyExists = await this.beerRepository.listByName(
      styleName,
    );

    if (verifyIfAlreadyExists) {
      throw new BeerAlreadyExists();
    }

    const beer = new Beer({
      styleName,
      minimumTemperature,
      maximumTemperature,
    });

    await this.beerRepository.create(beer);

    return { beer };
  }
}
