import { Injectable } from '@nestjs/common';

import { InjectRepository } from '@nestjs/typeorm';

import { Repository } from 'typeorm';

import { CustomerEntity } from '../Entity/customer.entity';

// import { CustomerDto, AddressDto, CityDto } from '../Dto';

import { CustomerDto } from '../Dto/customer.dto';

import { AddressDto } from '../Dto/address.dto';

import { CityDto } from '../Dto/city.dto';

import { CountryDto } from '../Dto/country.dto';




@Injectable()

export class CustomerService {

    constructor(

        @InjectRepository(CustomerEntity)

        private readonly customerRepository: Repository<CustomerEntity>,

    ) { }




    async getCustomers(): Promise<CustomerDto[]> {

        const customers = await this.customerRepository.find({ relations: ['address', 'address.city', 'address.city.country'] });




        return customers.map(customer => this.mapToCustomerDto(customer));

    }




    private mapToCustomerDto(customer: CustomerEntity): CustomerDto {

        const addressDto = new AddressDto();

        addressDto.id = customer.address.id;

        addressDto.street = customer.address.street;

        addressDto.district = customer.address.district;

        addressDto.postalcode = customer.address.postalcode;

        addressDto.phnumber = customer.address.phnumber;






        const cityDto = new CityDto();

        cityDto.id = customer.address.city.id;

        cityDto.city = customer.address.city.city;

        const countryDto = new CountryDto(); // Create a new CountryDto object

        countryDto.id = customer.address.city.country.id;

        countryDto.country = customer.address.city.country.country;




        cityDto.Country = countryDto;




        addressDto.city = cityDto;




        const customerDto = new CustomerDto();

        customerDto.id = customer.id;

        customerDto.first_name = customer.first_name;

        customerDto.last_name = customer.last_name;

        customerDto.email = customer.email;




        customerDto.address = addressDto;




        return customerDto;

    }

}