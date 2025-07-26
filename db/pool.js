import { Pool } from 'pg';
import 'dotenv/config';
import process from 'process'
// Again, this should be read from an environment variable
const connection = process.env.DATABASE_URL
console.log("Connecting to DB:", process.env.DATABASE_URL);

export default new Pool({
  connectionString: connection,
});
//postgresql://gobili:j3JTbRbnSUCAI7eCR8eW2MfFfeci7ncs@dpg-d227bqbe5dus739b9mtg-a.singapore-postgres.render.com/messagesdb_jr05