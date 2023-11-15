SELECT cohorts.name as cohort, SUM(completed_at - started_at) as total_duration
FROM students
JOIN cohorts ON cohorts.id = cohort_id
JOIN assistance_requests ON students.id = student_id
GROUP BY cohorts.name
ORDER BY SUM(completed_at - started_at) ASC;