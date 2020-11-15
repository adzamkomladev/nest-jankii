import { registerAs } from '@nestjs/config';

export default registerAs('database', () => ({
  host: String(process.env.DB_HOST),
  type: String(process.env.DB_TYPE),
  port: Number(process.env.DB_PORT) ?? 3306,
  database: String(process.env.DB_NAME),
  username: String(process.env.DB_USERNAME),
  password: String(process.env.DB_PASSWORD),
  entities: [__dirname + '/../**/*.entity{.ts,.js}'],
  synchronize: Boolean(process.env.DB_SYNCHRONIZE) ?? false,
}));
