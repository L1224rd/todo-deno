import db from '../config/db.ts';

export default {
  find: async (filter?: any, include?: any, fields?: any) => {
    const items = await db.query(`
      select items.*
      from items
    `);

    return items;
  },
  // findById
  // create
  // updateById
  // deleteById
  // count
};