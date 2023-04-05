import { Injectable } from '@nestjs/common';
import { PrismaService } from '@infra/database/prisma/prisma.service';
import { BeerRepository } from '@application/repositories/beers-repository';
import { Beer } from '@application/entities/beer';

@Injectable()
export class PrismaBeersRepository implements BeerRepository {
  constructor(private prismaService: PrismaService) {}
  listAll(): Promise<Beer> {
    throw new Error('Method not implemented.');
  }
  listById(beerId: string): Promise<Beer> {
    throw new Error('Method not implemented.');
  }
  create(beer: Beer): Promise<void> {
    throw new Error('Method not implemented.');
  }
  updated(beer: Beer): Promise<void> {
    throw new Error('Method not implemented.');
  }
  delete(beer: Beer): Promise<void> {
    throw new Error('Method not implemented.');
  }
}
