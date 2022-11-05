export const environment = {
  production: false,
  environment: 'DEV',
  /* httpConfig: {
    privateDomain: '0.0.0.0',
    privatePort: 3000,
    publicDomain: 'localhost',
    publicPort: 3000,
    httpsEnabled: false,
    globalPrefix: 'api',
    apiVersion: 'v1',
    publicAssetsUrl: '',
    publicApiUrl: '',
  }, */
  typeormConfig: {
    type: 'mysql',
    host: 'localhost',
    port: '3306',
    username: 'root',
    password: 'root',
    database: 'readbook',
    entities: ['dist/**/*.entity{.ts,.js}'],
    synchronize: true,
  },
  criptography: {
    passwordCryptoJS: 'sistemas',
  },
  jwtConfig: {
    secret: 'sistemas',
    signOptions: { expiresIn: '3600s' },
  },
};
