import {Pool} from 'pg'

const pool = new Pool({
  user: 'zefupquyblpcnc',
  host: 'ec2-54-224-120-186.compute-1.amazonaws.com',
  database: 'ddhqnap6lldd4e',
  password: '6a76417bf29d4fcb2f754226a0765a2bbcf44e85d8aad36b3831e1f3db9efe3e',
  port: 5432,
})

export default pool