import { Beer } from '@application/entities/beer';
import { BeerRepository } from '@application/repositories/beers-repository';
import { Injectable } from '@nestjs/common';

interface UpdateBeerRequest {
  styleName?: string;
  minimumTemperature?: string;
  maximumTemperature?: string;
  createdAt?: Date;
}

@Injectable()
export class UpdateBeer {
  constructor(private readonly beerRepository: BeerRepository) {}

  async execute(beerId: string, request: UpdateBeerRequest) {
    await this.beerRepository.update(beerId, request);
  }
}
