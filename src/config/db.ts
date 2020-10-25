import { Client } from "https://deno.land/x/postgres/mod.ts";

const db = new Client({
  user: "postgres",
  database: "books",
  hostname: "localhost",
  password: "123123",
  port: 5432
});

try {
  console.log('yay');
  await db.connect();

  const id = await db.query('select id from users order by id limit 1');
  console.log(id);
} catch (error) {
  console.log(error);
}

export default db;