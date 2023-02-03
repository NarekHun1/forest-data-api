import { mainSpeciesTypes } from '../enums/mainSpeciesTypes.enum';
import { Stand } from '../models/stand.model';

export interface UpdateStand {
  vol_m3_per_h?: number;

  age_years?: number;

  longitude?: number;

  latitude?: number;

  size_in_ha?: number;

  main_species?: mainSpeciesTypes;
}

export interface UpdateStandInput {
  stand_id: Stand['id'];
  updateData: UpdateStand;
}

export interface DeleteStandInput {
  stand_id: Stand['id'];
}

export interface StandsFilterInput {
  filter: StandsFilter;
}

export interface StandByIdInput {
  stand_id: Stand['id'];
}

export interface StandsFilter {
  main_species?: mainSpeciesTypes;
  age_years?: number;
  page?: number;
  limit?: number;
}
