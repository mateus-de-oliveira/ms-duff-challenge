import { BeerRepository } from '@application/repositories/beers-repository';
import { Injectable } from '@nestjs/common';

@Injectable()
export class ListAllBeer {
  constructor(private readonly beerRepository: BeerRepository) {}

  async execute() {
    return await this.beerRepository.listAll();
  }
}
