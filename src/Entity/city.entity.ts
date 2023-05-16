import { CountryEntity } from '../Entity/country.entity';

import { CountryDto } from '../Dto/country.dto';

import { Column, Entity, JoinColumn, ManyToOne, PrimaryGeneratedColumn } from 'typeorm';

@Entity('city')

export class CityEntity {

    @PrimaryGeneratedColumn()

    id: number;

    @Column()

    city: string;

    @ManyToOne(() => CountryEntity)

    @JoinColumn({ name: 'country_id' })

    country: CountryDto;

}