import { Table, Column, Model } from 'sequelize-typescript';
import { mainSpeciesTypes } from '../enums/mainSpeciesTypes.enum';

@Table
export class Stand extends Model<Stand> {
  @Column({ unique: true })
  stand_id!: number;

  @Column
  vol_m3_per_ha!: number;

  @Column
  age_years!: number;

  @Column({ type: 'float' })
  longitude!: number;

  @Column({ type: 'float' })
  latitude!: number;

  @Column({ type: 'float' })
  size_in_ha!: number;

  @Column({ type: 'text', values: Object.keys(mainSpeciesTypes) })
  main_species!: mainSpeciesTypes;
}
