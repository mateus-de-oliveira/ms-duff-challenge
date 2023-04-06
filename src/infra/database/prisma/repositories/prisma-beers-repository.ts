import { Injectable } from '@nestjs/common';
import { PrismaService } from '@infra/database/prisma/prisma.service';
import { BeerRepository } from '@application/repositories/beers-repository';
import { Beer } from '@application/entities/beer';
import { PrismaBeerMapper } from '@infra/database/mappers/prisma-beer-mapper';

@Injectable()
export class PrismaBeersRepository implements BeerRepository {
  constructor(private prismaService: PrismaService) {}

  listAll(): Promise<Beer> {
    throw new Error('Method not implemented.');
  }
  listById(beerId: string): Promise<Beer> {
    throw new Error('Method not implemented.');
  }

  async create(beer: Beer): Promise<void> {
    const persistentBeer = PrismaBeerMapper.toPrisma(beer);

    await this.prismaService.beer.create({
      data: persistentBeer,
    });
  }

  async update(beerId: string, beer: Beer): Promise<Partial<Beer>> {
    const updateBeer = await this.prismaService.beer.update({
      where: {
        id: beerId,
      },
      data: beer,
    });

    return updateBeer;
  }

  async delete(beerId: string): Promise<void> {
    await this.prismaService.beer.delete({
      where: {
        id: beerId,
      },
    });
  }
}
