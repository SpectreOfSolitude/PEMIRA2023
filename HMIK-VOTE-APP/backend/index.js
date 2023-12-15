require('dotenv').config();
const routes = require('./routes');

const express = require('express');
const cors = require('cors');
const app = express();
const corsOption = {
  origin: '*',
}

app.use(cors(corsOption));
app.use(express.json());
app.use('/api', routes);

app.listen(3000, () => {
  console.log('Example app listening on port 3000!');
});