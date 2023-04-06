import { Injectable } from '@nestjs/common';
import { PrismaService } from '@infra/database/prisma/prisma.service';
import { BeerRepository } from '@application/repositories/beers-repository';
import { Beer } from '@application/entities/beer';
import { PrismaBeerMapper } from '@infra/database/mappers/prisma-beer-mapper';

@Injectable()
export class PrismaBeersRepository implements BeerRepository {
  constructor(private prismaService: PrismaService) {}

  async listSuitableStyle(temperature: number): Promise<Beer> {
    const beer = await this.prismaService.$queryRaw<Beer[]>`SELECT *
      FROM "Beer"
      WHERE ABS("Beer"."roundedAverageTemperature" - ${temperature}) = (
          SELECT MIN(ABS("Beer"."roundedAverageTemperature" - ${temperature}))
          FROM "Beer"
      )
      ORDER BY "Beer"."styleName" ASC
      LIMIT 1;
    `;

    return PrismaBeerMapper.toDomain(beer[0]);
  }

  async listAll(): Promise<Beer[]> {
    const beers = await this.prismaService.beer.findMany();

    return beers.map(PrismaBeerMapper.toDomain);
  }

  async listById(beerId: string): Promise<Beer> {
    const beer = await this.prismaService.beer.findUnique({
      where: {
        id: beerId,
      },
    });

    return PrismaBeerMapper.toDomain(beer);
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
