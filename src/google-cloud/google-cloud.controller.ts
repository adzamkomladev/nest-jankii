import { Controller, Get } from '@nestjs/common';

import { ApiOperation } from '@nestjs/swagger';

@Controller('')
export class GoogleCloudController {
  @Get('/')
  @ApiOperation({ summary: 'Home route.' })
  serverOkay() {
    return 'Server Okay';
  }

  @Get('_ah/health')
  @ApiOperation({ summary: 'Google cloud health route.' })
  healthOkay() {
    return 'Health Okay';
  }
}
