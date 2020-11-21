import { Controller, Get } from '@nestjs/common';

@Controller('')
export class GoogleCloudController {
  @Get('/')
  serverOkay() {
    return 'Server Okay';
  }

  @Get('_ah/health')
  healthOkay() {
    return 'Health Okay';
  }
}
