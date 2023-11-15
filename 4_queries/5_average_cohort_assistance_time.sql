SELECT cohorts.name as name, AVG(completed_at - started_at) as average_assistance_time
FROM students
JOIN cohorts ON cohorts.id = cohort_id
JOIN assistance_requests ON students.id = student_id
GROUP BY cohorts.name
ORDER BY AVG(completed_at - started_at) ASC;