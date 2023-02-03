import { findOneStandOrFall } from './helpers';
import { Stand } from '../../../models/stand.model';
import {
  DeleteStandInput,
  UpdateStandInput,
} from '../../../interfaces/stand.interface';

export const updateStand = async (
  parent: any,
  { stand_id, updateData }: UpdateStandInput,
) => {
  await findOneStandOrFall(stand_id);

  await Stand.update(updateData, { where: { stand_id } });
};

export const deleteStand = async (
  parent: any,
  { stand_id }: DeleteStandInput,
) => {
  await findOneStandOrFall(stand_id);

  await Stand.destroy({ where: { stand_id } });
};
