import express from 'express';
import cors from 'cors';
const app = express();


app.use(cors());
app.use(express.json());

app.post('/api/register', (req, res) => {
  const { username, password } = req.body;
  
  res.json({ message: 'User registered successfully' });
});

app.listen(3000, () => {
  console.log('Server is running on port 3000');
});