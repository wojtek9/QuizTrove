import express from 'express';
import cors from 'cors';
import { db } from './Database.js';
const app = express();


app.use(cors());
app.use(express.json());

app.post('/api/register', (req, res) => {
  const { username, password } = req.body;

  const sql = 'INSERT INTO Users (username, password) VALUES (?, ?)';
  db.query(sql, [username, password], (err, result) => {
    if (err) {
      console.error(err);
      res.status(500).json({ error: 'User registration failed' });
    } else {
      res.json({ message: 'User registered successfully' });
    }
  });
});

app.listen(3000, () => {
  console.log('Server is running on port 3000');
});