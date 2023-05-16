
import { Module } from '@nestjs/common';

import { TypeOrmModule } from '@nestjs/typeorm';

import { CustomerEntity } from '../Entity/customer.entity';

import { AddressEntity } from '../Entity/address.entity';

import { CityEntity } from '../Entity/city.entity';

// import { Country } from 'src/country/country.entity';

import { CustomersController } from '../Customer/customer.controller';

import { CustomerService } from '../Customer/customer.service';




@Module({

    imports: [TypeOrmModule.forFeature([CustomerEntity, AddressEntity, CityEntity])],

    controllers: [CustomersController],

    providers: [CustomerService],

})

export class CustomersModule { }





