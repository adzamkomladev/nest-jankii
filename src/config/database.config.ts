import { registerAs } from '@nestjs/config';
const extra = (instanceConnectName, dbHost) => {
  if (instanceConnectName) {
    return {
      extra: {
        socketPath: `/cloudsql/${instanceConnectName}`,
      },
    };
  }

  return {
    host: dbHost,
  };
};

export default registerAs('database', () => ({
  type: process.env.DB_TYPE ?? 'mysql',
  port: process.env.DB_PORT ?? 3306,
  database: process.env.DB_NAME,
  username: process.env.DB_USER,
  password: process.env.DB_PASSWORD,
  entities: [__dirname + '/../**/*.entity{.ts,.js}'],
  synchronize: Boolean(process.env.DB_SYNCHRONIZE) ?? false,
  ...extra(process.env.INSTANCE_CONNECTION_NAME, process.env.DB_HOST),
}));
