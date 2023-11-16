const { Pool } = require('pg');

const [execPath, file, cohortName] = process.argv;

const pool = new Pool({
  user: 'vagrant',
  password: '123',
  host: 'localhost',
  database: 'bootcampx'
});

pool.query(`
  SELECT DISTINCT teachers.name as teacher, cohorts.name as cohort
  FROM assistance_requests
  JOIN teachers ON teacher_id = teachers.id
  JOIN students ON student_id = students.id
  JOIN cohorts ON cohort_id = cohorts.id
  WHERE cohorts.name LIKE '%${cohortName}%'
  ORDER BY teachers.name ASC;
`)
.then(res => {
  console.log(res.rows);
})
.catch(err => console.error('query error', err.stack));