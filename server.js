const express = require('express');
const dotenv = require('dotenv').config();
const mongoose = require('mongoose');
const users = require('./routes/users');
const albums = require('./routes/albums');
const ratings = require('./routes/ratings');

const app = express();
const PORT = process.env.PORT || 5000;

app.use(express.json());
app.use(function (req, res, next) {
  res.header('Access-Control-Allow-Origin', '*');
  res.header('Access-Control-Allow-Methods', 'GET, PUT, POST, DELETE');
  res.header(
    'Access-Control-Allow-Headers',
    'Origin, X-Requested-With, Content-Type, Accept, Authorization'
  );
  next();
});

app.use('/api/ratings', ratings);
app.use('/api/albums', albums);
app.use('/api/users', users);

app.listen(PORT, () => {
  console.log(`[SERVER] Server started at ${PORT}.`);
});

app.get('/', (req, res) => {
  res.json({ msg: 'TIN-Final API Home' });
});

mongoose.connect(
  process.env.DB_CONNECTION_STRING,
  {
    useNewUrlParser: true,
    useUnifiedTopology: true,
    useFindAndModify: false,
    useCreateIndex: true,
  },
  () => {
    console.log(`[SERVER] MongoDB connected.`);
  }
);
