import { BeerRepository } from '@application/repositories/beers-repository';
import { Injectable } from '@nestjs/common';

@Injectable()
export class DeleteBeer {
  constructor(private readonly beerRepository: BeerRepository) {}

  async execute(beerId: string) {
    await this.beerRepository.delete(beerId);
  }
}
