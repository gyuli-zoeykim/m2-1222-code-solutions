const express = require('express');
const app = express();

const pg = require('pg');
const db = new pg.Pool({
  connectionString: 'postgres://dev:dev@localhost/studentGradeTable',
  ssl: {
    rejectUnauthorized: false
  }
});

app.get('/api/grades', (req, res, next) => {
  const sql = `
    select *
      from "grades"
  `;

  db.query(sql)
    .then(result => {
      const grade = result.rows;
      res.status(200).json(grade);
    })
    .catch(err => {
      console.error(err);
      res.status(500).json({
        error: 'An unexpected error occurred.'
      });
    });
});

app.use(express.json());

app.post('/api/grades', (req, res, next) => {

  const titleGrade = 'INSERT INTO grades(name, course, score) VALUES($1, $2, $3) RETURNING *';
  const valueGrade = [req.body.name, req.body.course, req.body.score];
  if (!valueGrade.includes(req.body.name, req.body.course, req.body.score) || Number(req.body.score) < 0 || Number(req.body.score) > 100) {
    res.status(400).json({
      error: 'input is missing or invalid.'
    });
    return;
  }
  db.query(titleGrade, valueGrade)
    .then(result => {
      const newGrade = result.rows[0];
      res.status(201).json(newGrade);
    })
    .catch(err => {
      console.error(err);
      res.status(500).json({
        error: 'An unexpected error occurred.'
      });
    });
});

app.put('/api/grades/:gradeId', (req, res, next) => {
  const gradeId = Number(req.params.gradeId);
  const update = [req.body.name, req.body.course, req.body.score, gradeId];
  if (!Number.isInteger(gradeId) || gradeId <= 0 || !update.includes(req.body.name, req.body.course, req.body.score) || Number(req.body.score) < 0 || Number(req.body.score) > 100) {
    res.status(400).json({
      error: 'input is missing or invalid.'
    });
    return;
  }

  const sql = `
    update "grades"
    set  "name" = $1,
           "course"= $2,
           "score" = $3
     where "gradeId" = $4
  `;

  db.query(sql, update)
    .then(result => {
      const upGrade = result.rows[0];
      if (!upGrade) {
        res.status(404).json({
          error: `Cannot find grade with 'gradeId' ${gradeId}`
        });
      }
      res.status(200).json(upGrade);
    })
    .catch(err => {
      console.error(err);
      res.status(500).json({
        error: 'An unexpected error occurred.'
      });
    });
});

app.delete('/api/grades/:gradeId', (req, res, next) => {
  const gradeId = Number(req.params.gradeId);
  if (!Number.isInteger(gradeId) || gradeId <= 0) {
    res.status(400).json({
      error: '"gradeId" must be a positive integer'
    });
    return;
  }

  const sql = `
    delete
    from "grades"
    where "gradeId" = $1
    returning *
  `;
  const paramsID = [gradeId];
  db.query(sql, paramsID)
    .then(result => {
      const deleteGrade = result.rows[0];
      if (!deleteGrade) {
        res.status(404).json({
          error: `Cannot find grade with 'gradeId' ${gradeId}`
        });
      }
      res.status(204).json('Grade successfully deleted.');
    })
    .catch(err => {
      console.error(err);
      res.status(500).json({
        error: 'An unexpected error occurred.'
      });
    });
});

app.listen(3000, () => {
  /* console.log('Listening on port 3000'); */
});
