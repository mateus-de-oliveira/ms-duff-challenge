import { DatabaseModule } from '@infra/database/database.module';
import { Module } from '@nestjs/common';
import { BeersController } from './controllers/beers.controller';
import { CreateBeer } from '@application/useCases/beers/create-beer';

@Module({
  imports: [DatabaseModule],
  controllers: [BeersController],
  providers: [CreateBeer],
})
export class HttpModule {}
