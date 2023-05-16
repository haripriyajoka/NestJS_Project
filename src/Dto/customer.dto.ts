import { AddressDto } from './address.dto';




export class CustomerDto {

    id: number;

    first_name: string;

    last_name: string;

    email: string;

    address: AddressDto;

}