import { Stand } from '../../../models/stand.model';
import { findOneStandOrFall } from './helpers';
import {
  StandByIdInput,
  StandsFilterInput,
} from '../../../interfaces/stand.interface';

export const getStands = async (
  parent: any,
  {
    filter: { age_years, main_species, page = 1, limit = 10 } = {},
  }: StandsFilterInput = { filter: {} },
) => {
  const filters = {};
  const offset = (page - 1) * limit;

  if (main_species) Object.assign(filters, { main_species });
  if (age_years) Object.assign(filters, { age_years });

  const [total, items] = await Promise.all([
    Stand.count({ where: filters }),
    Stand.findAll({ where: filters, limit, offset }),
  ]);
  return {
    total,
    items,
  };
};

export const getStandById = async (
  parent: any,
  { stand_id }: StandByIdInput,
) => {
  return findOneStandOrFall(stand_id);
};
