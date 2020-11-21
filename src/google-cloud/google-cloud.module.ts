import { Module } from '@nestjs/common';
import { GoogleCloudController } from './google-cloud.controller';

@Module({
  controllers: [GoogleCloudController],
})
export class GoogleCloudModule {}
