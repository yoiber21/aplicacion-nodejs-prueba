import {Pool} from 'pg'

const pool = new Pool({
  user: 'postgres',
  host: 'localhost',
  database: 'pruebaApiRest',
  password: '1001032661',
  port: 5432,
})

export default pool