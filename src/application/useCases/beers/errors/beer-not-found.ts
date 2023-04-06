import { NotFoundException } from '@nestjs/common';

export class BeerNotFoundException extends NotFoundException {
  constructor() {
    super(`beer not found on database`, BeerNotFoundException.name);
  }
}
