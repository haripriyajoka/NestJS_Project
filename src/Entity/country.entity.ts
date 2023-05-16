import { Column, Entity, PrimaryGeneratedColumn } from 'typeorm';

import { CityEntity } from './city.entity';

@Entity('country')

export class CountryEntity {

    @PrimaryGeneratedColumn()

    id: number;

    @Column()

    country: string;

}