import { DatabaseModule } from '@infra/database/database.module';
import { Module } from '@nestjs/common';
import { BeersController } from './controllers/beers.controller';

@Module({
  imports: [DatabaseModule],
  controllers: [BeersController],
  providers: [],
})
export class HttpModule {}
