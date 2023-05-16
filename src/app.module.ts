import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { CustomerEntity } from './Entity/customer.entity';
import { AddressEntity } from './Entity/Address.Entity';
import { CityEntity } from './Entity/city.entity';
import { CountryEntity } from './Entity/country.entity';
import { CustomersModule } from './Customer/customer.module';

@Module({
  imports: [
    TypeOrmModule.forRoot({

      type: 'mysql',

      username: 'root',

      host: 'localhost',

      // port:3306,

      password: 'root',

      database: 'sakila1',

      entities: [CustomerEntity, AddressEntity, CityEntity, CountryEntity],

      autoLoadEntities: true,

      synchronize: true,




    }),

    CustomersModule,

  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule { }
