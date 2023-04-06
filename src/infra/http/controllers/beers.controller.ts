import {
  Body,
  Controller,
  Delete,
  Get,
  HttpStatus,
  Param,
  Patch,
  Post,
} from '@nestjs/common';

import { CreateBeerBody } from '../dtos/create-beer-body';
import { CreateBeer } from '@application/useCases/beers/create-beer';
import { BeerViewModels } from '../view-models/beers-view-models';
import { DeleteBeer } from '@application/useCases/beers/delete-beer';

@Controller('beers')
export class BeersController {
  constructor(private createBeer: CreateBeer, private deleteBeer: DeleteBeer) {}

  @Get(':beerId')
  async listById(@Param('beerId') beerId: string) {
    console.log('chegou no controller: listById' + beerId);
  }

  @Get()
  async listAll() {
    console.log('chegou no controller: listAll');
  }

  @Post()
  async create(@Body() body: CreateBeerBody) {
    const { styleName, minimumTemperature, maximumTemperature } = body;

    const { beer } = await this.createBeer.execute({
      styleName,
      minimumTemperature,
      maximumTemperature,
    });

    return BeerViewModels.toHTTP(beer);
  }

  @Patch(':beerId')
  async update(@Param('beerId') beerId: string) {
    console.log('chegou no controller: update' + beerId);
  }

  @Delete(':beerId')
  async delete(@Param('beerId') beerId: string) {
    await this.deleteBeer.execute(beerId);
  }
}
