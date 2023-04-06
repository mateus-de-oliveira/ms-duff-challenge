import { BeerRepository } from '@application/repositories/beers-repository';
import { Injectable } from '@nestjs/common';

@Injectable()
export class ListSuitableStyleBeer {
  constructor(private readonly beerRepository: BeerRepository) {}

  async execute(temperature: number) {
    return await this.beerRepository.listSuitableStyle(temperature);
  }
}
