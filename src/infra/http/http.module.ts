import { DatabaseModule } from '@infra/database/database.module';
import { Module } from '@nestjs/common';
import { BeersController } from './controllers/beers.controller';
import { CreateBeer } from '@application/useCases/beers/create-beer';
import { DeleteBeer } from '@application/useCases/beers/delete-beer';
import { UpdateBeer } from '@application/useCases/beers/update-beer';

@Module({
  imports: [DatabaseModule],
  controllers: [BeersController],
  providers: [CreateBeer, DeleteBeer, UpdateBeer],
})
export class HttpModule {}
