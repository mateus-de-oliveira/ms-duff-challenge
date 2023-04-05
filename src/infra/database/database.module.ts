import { Module } from '@nestjs/common';
import { PrismaService } from './prisma/prisma.service';
import { BeerRepository } from '@application/repositories/beers-repository';
import { PrismaBeersRepository } from './prisma/repositories/prisma-beers-repository';

@Module({
  providers: [
    PrismaService,
    {
      provide: BeerRepository,
      useClass: PrismaBeersRepository,
    },
  ],
  exports: [BeerRepository],
})
export class DatabaseModule {}
