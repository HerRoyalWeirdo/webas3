import faunadb from 'faunadb';
const client = new faunadb.Client({
  secret: 'fnAEp7JwE1ACUsuSbB16e2Fj6pGC8LkLCVPC5S_8'//process.env.DB_KEY
});
const q = faunadb.query;
export { client, q };