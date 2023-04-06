import { BeerRepository } from 'src/application/repositories/beers-repository';
import { Injectable } from '@nestjs/common';

@Injectable()
export class ListByNameBeer {
  constructor(private readonly beerRepository: BeerRepository) {}

  async execute(beerStyleName: string) {
    return await this.beerRepository.listByName(beerStyleName);
  }
}
