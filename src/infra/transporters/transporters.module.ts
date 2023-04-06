import { Global, Module } from '@nestjs/common';
import { HttpClientService } from './http-client/http-client.service';
import { HttpModule } from '@nestjs/axios';

@Module({
  imports: [HttpModule],
  controllers: [],
  providers: [HttpClientService],
  exports: [HttpClientService],
})
export class TransportersModule {}
