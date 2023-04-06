import { Module } from '@nestjs/common';
import { DatabaseModule } from '@infra/database/database.module';
import { HttpModule } from '@infra/http/http.module';
import { TransportersModule } from '@infra/transporters/transporters.module';

@Module({
  imports: [HttpModule, DatabaseModule, TransportersModule],
})
export class AppModule {}
