import { Module } from '@nestjs/common';
import { TypeOrmModule, TypeOrmModuleOptions } from '@nestjs/typeorm';
import { environment } from '../environment/environment';
import { AuthModule } from './modules/auth/auth.module';
import { BookModule } from './modules/books/book.module';
import { UserModule } from './modules/users/user.module';
import { UtilitiesModule } from './utilities/utilities.module';
@Module({
  imports: [
    UserModule,
    BookModule,
    UtilitiesModule,
    TypeOrmModule.forRoot({
      ...environment.typeormConfig,
    } as TypeOrmModuleOptions),
    AuthModule
  ],
})
export class AppModule {}
