import {
  Body,
  Controller,
  Delete,
  Get,
  Param,
  Patch,
  Post,
} from '@nestjs/common';

import { CreateBeerBodyDTO } from '../dtos/create-beer-body';
import { CreateBeer } from '@application/useCases/beers/create-beer';
import { BeerViewModels } from '../view-models/beers-view-models';
import { DeleteBeer } from '@application/useCases/beers/delete-beer';
import { UpdateBeer } from '@application/useCases/beers/update-beer';
import { ListAllBeer } from '@application/useCases/beers/list-all-beer';
import { ListByIdBeer } from '@application/useCases/beers/list-by-id-beer';

@Controller('beers')
export class BeersController {
  constructor(
    private createBeer: CreateBeer,
    private deleteBeer: DeleteBeer,
    private updateBeer: UpdateBeer,
    private listAllBeer: ListAllBeer,
    private listByIdBeer: ListByIdBeer,
  ) {}

  @Get(':beerId')
  async listById(@Param('beerId') beerId: string) {
    return await this.listByIdBeer.execute(beerId);
  }

  @Get()
  async listAll() {
    return await this.listAllBeer.execute();
  }

  @Post()
  async create(@Body() body: CreateBeerBodyDTO) {
    const { styleName, minimumTemperature, maximumTemperature } = body;

    const { beer } = await this.createBeer.execute({
      styleName,
      minimumTemperature,
      maximumTemperature,
    });

    return BeerViewModels.toHTTP(beer);
  }

  @Patch(':beerId')
  async update(
    @Param('beerId') beerId: string,
    @Body() body: Partial<CreateBeerBodyDTO>,
  ) {
    return this.updateBeer.execute(beerId, body);
  }

  @Delete(':beerId')
  async delete(@Param('beerId') beerId: string) {
    await this.deleteBeer.execute(beerId);
  }
}
