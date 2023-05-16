import { Controller, Get } from '@nestjs/common';

import { CustomerDto } from '../Dto/customer.dto';

import { CustomerService } from '../Customer/customer.service';




@Controller('customers')

export class CustomersController {

    constructor(private readonly customerService: CustomerService) { }

    @Get()

    async getCustomers(): Promise<CustomerDto[]> {

        return this.customerService.getCustomers();

    }

}