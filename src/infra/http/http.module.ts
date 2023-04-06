import { Module } from '@nestjs/common';
import { DatabaseModule } from '../database/database.module';
import { TransportersModule } from '../transporters/transporters.module';
import { BeersController } from './controllers/beers.controller';
import { CreateBeer } from 'src/application/useCases/beers/create-beer';
import { DeleteBeer } from 'src/application/useCases/beers/delete-beer';
import { UpdateBeer } from 'src/application/useCases/beers/update-beer';
import { ListAllBeer } from 'src/application/useCases/beers/list-all-beer';
import { ListByIdBeer } from 'src/application/useCases/beers/list-by-id-beer';
import { ListSuitableStyleBeer } from 'src/application/useCases/beers/list-suitable-style-beer';

@Module({
  imports: [DatabaseModule, TransportersModule],
  controllers: [BeersController],
  providers: [
    CreateBeer,
    DeleteBeer,
    UpdateBeer,
    ListAllBeer,
    ListByIdBeer,
    ListSuitableStyleBeer,
  ],
})
export class HttpModule {}
