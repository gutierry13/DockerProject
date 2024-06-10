const express = require('express');
const mysql = require('mysql2');
require('dotenv').config();

const app = express();
const port = 3000;

const db = mysql.createConnection({
    host: process.env.DB_HOST,
    user: process.env.DB_USER,
    password: process.env.DB_PASSWORD,
    database: process.env.DB_NAME
});

db.connect(err => {
    if (err) {
        console.error('Error connecting to the database:', err.stack);
        return;
    }
    console.log('Connected to the database.');
});

app.get('/consulta-dados', (req, res) => {
  db.query('SELECT * FROM users;', (err, results) => {
    res.json(results);
  });
});

app.listen(port, () => {
    console.log(`Server running at http://localhost:${port}/`);
});