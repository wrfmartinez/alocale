import dotenv from 'dotenv';
import express from 'express';
import cors from 'cors';

dotenv.config();

const app = express();
app.use(cors());

app.get('/', (req, res) => {
  res.send('Hello World!');
})

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
  console.log(`Server running at localhost:${PORT}`);
})