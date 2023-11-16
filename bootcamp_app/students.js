const { Pool } = require('pg');

const [execPath, file, cohort, maxResults] = process.argv;

const pool = new Pool({
  user: 'vagrant',
  password: '123',
  host: 'localhost',
  database: 'bootcampx'
});

pool.query(`
  SELECT students.id as id, students.name as name, cohorts.name as cohort
  FROM students
  JOIN cohorts ON cohort_id = cohorts.id
  WHERE cohorts.name LIKE '%${cohort}%'
  LIMIT ${maxResults || 5};
`)
.then(res => {
  console.log(res.rows);
})
.catch(err => console.error('query error', err.stack));