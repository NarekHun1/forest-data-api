import { syncDB } from '../modules/db.module';
import { Stand } from '../models/stand.model';
import cstToJSON from 'csvtojson/v2';

const converter = cstToJSON();
const filePath = 'sample_stands_10000.csv';

const importStands = async () => {
  await syncDB();
  const stands: Stand[] = await converter.fromFile(filePath);
  if (stands.length) {
    await Stand.bulkCreate(stands);
  }

  console.log(`Stands have been imported ${stands.length}`);
};

importStands();
