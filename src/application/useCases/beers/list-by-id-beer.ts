import { BeerRepository } from '@application/repositories/beers-repository';
import { Injectable } from '@nestjs/common';

@Injectable()
export class ListByIdBeer {
  constructor(private readonly beerRepository: BeerRepository) {}

  async execute(beerId: string) {
    return await this.beerRepository.listById(beerId);
  }
}
