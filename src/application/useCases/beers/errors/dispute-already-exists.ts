import { ConflictException } from '@nestjs/common';

export class BeerAlreadyExists extends ConflictException {
  constructor() {
    super(`beer style already exists in the database`, BeerAlreadyExists.name);
  }
}
