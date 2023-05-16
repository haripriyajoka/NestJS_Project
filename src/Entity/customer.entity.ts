import { Column, Entity, JoinColumn, ManyToOne, PrimaryGeneratedColumn } from 'typeorm';

import { AddressEntity } from './Address.Entity';




@Entity('customers')

export class CustomerEntity {

    @PrimaryGeneratedColumn()

    id: number;

    @Column()

    first_name: string;

    @Column()

    last_name: string;

    @Column()

    email: string;



    @ManyToOne(() => AddressEntity, { eager: true }) // eager loading address

    @JoinColumn({ name: 'address_id' })

    address: AddressEntity;

}