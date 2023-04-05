import {
  Body,
  Controller,
  Delete,
  Get,
  Param,
  Patch,
  Post,
} from '@nestjs/common';

import { CreateBeerBody } from '../dtos/create-beer-body';

@Controller('beers')
export class BeersController {
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
    console.log('chegou no controller: create' + body);
  }

  @Patch(':beerId')
  async update(@Param('beerId') beerId: string) {
    console.log('chegou no controller: update' + beerId);
  }

  @Delete(':beerId')
  async delete(@Param('beerId') beerId: string) {
    console.log('chegou no controller: delete' + beerId);
  }
}
