import { Beer } from '@application/entities/beer';
import { BeerRepository } from '@application/repositories/beers-repository';
import { Injectable } from '@nestjs/common';

interface CreateBeerRequest {
  styleName: string;
  minimumTemperature: string;
  maximumTemperature: string;
  createdAt?: Date;
}

@Injectable()
export class DeleteBeer {
  constructor(private readonly beerRepository: BeerRepository) {}

  async execute(beerId: string) {
    await this.beerRepository.delete(beerId);
  }
}
