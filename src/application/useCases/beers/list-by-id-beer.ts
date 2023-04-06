import { BeerRepository } from 'src/application/repositories/beers-repository';
import { Injectable } from '@nestjs/common';
import { BeerNotFoundException } from './errors/beer-not-found';

@Injectable()
export class ListByIdBeer {
  constructor(private readonly beerRepository: BeerRepository) {}

  async execute(beerId: string) {
    const beer = await this.beerRepository.listById(beerId);

    if (!beer) {
      throw new BeerNotFoundException();
    }

    return beer;
  }
}
