import { Stand } from '../../../models/stand.model';

export const findOneStandOrFall = async (stand_id: Stand['stand_id']) => {
  const stand = await Stand.findOne({ where: { stand_id } });
  if (!stand) {
    throw new Error('stand does not Exists');
  }
  return stand;
};
