import { registerAs } from '@nestjs/config';

export default registerAs('app', () => ({
  port: Number(process.env.APP_PORT) ?? 8080,
  version: process.env.VERSION ?? 'v1.0',
}));
