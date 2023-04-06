import { Module } from '@nestjs/common';
import { DatabaseModule } from './infra/database/database.module';
import { TransportersModule } from './infra/transporters/transporters.module';
import { HttpModule } from './infra/http/http.module';

@Module({
  imports: [HttpModule, DatabaseModule, TransportersModule],
})
export class AppModule {}
