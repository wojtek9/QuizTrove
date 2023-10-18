import express from 'express';
import cors from 'cors';
import { db } from './Database.js';
import bcrypt from 'bcrypt';
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

app.post('/api/login', async (req, res) => {
  const { username, password } = req.body;

  const query = 'SELECT * FROM Users WHERE username = ?';

  db.query(query, [username], async (err, results) => {
    if (err) {
      console.error(err);
      return res.status(500).json({ error: 'Login failed' });
    }

    if (results.length === 0) {
      return res.status(401).json({ error: 'Invalid username or password' });
    }

    const user = results[0];

    //const passwordMatch = await bcrypt.compare(password, user.password);
    if (password == user.Password) {
      return res.json({ message: 'Login successful' });
    } else {
      return res.status(401).json({ error: 'passwordmatch error' });
    }
  });
});

app.listen(3000, () => {
  console.log('Server is running on port 3000');
});