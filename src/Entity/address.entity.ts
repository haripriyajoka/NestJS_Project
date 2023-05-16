import { Column, Entity, JoinColumn, ManyToOne, PrimaryGeneratedColumn } from 'typeorm';

import { CityEntity } from './city.entity';

@Entity('address')

export class AddressEntity {

    @PrimaryGeneratedColumn()

    id: number;

    @Column()

    street: string;

    @Column()

    district: string;

    @Column()

    postalcode: number;

    @Column()

    phnumber: number;

    @ManyToOne(() => CityEntity)

    @JoinColumn({ name: 'city_id' })

    city: CityEntity;

}