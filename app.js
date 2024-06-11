const express = require('express');
const mysql = require('mysql2');
const os = require('os');
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
app.get('/liveness', (req, res) => {
  return res
  .status(200)
  .json({ message: 'Meu app está vivo!',
    timestamp: new Date().toISOString(),
    version: '1.0.0',
    date: new Date().getTime(),
    status: 'UP',
    path: process.cwd,
    port: process.env.PORT,
    uid: process.getuid,
    gid: process.getgid
   });
});
app.get('/readiness', (req, res) => {
  return res
  .status(200)
  .json({ message: 'Meu app está pronto!',
    platform: os.platform(),
    freemen: os.freemem(),
    totalmem: os.totalmem(),
    homedir: os.homedir(),
    date: new Date().getTime(),
   });
});
app.listen(port, () => {
    console.log(`Server running at http://localhost:${port}/`);
});
