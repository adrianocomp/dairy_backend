const express = require('express');

require('dotenv').config()
const mongoose = require('mongoose');
const cors = require('cors');
const routes = require('./routes')
var bodyParser = require('body-parser');
const app = express();


mongoose.connect(process.env.MONGO_URL, {
  useNewUrlParser: true,
  useUnifiedTopology: true,
  useFindAndModify:false
});

app.use(cors())

app.use(express.json());
app.use(routes);
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

app.listen(process.env.PORT);