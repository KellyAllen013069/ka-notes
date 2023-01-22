const express = require('express');
const dotenv = require('dotenv').config()
const db = require('./routes/db-config');
const cookie = require('cookie-parser');
const controllers = require('./controllers/app')
const cors = require('cors');
const morgan = require('morgan');

const app = express();
app.use(cors())
app.use(morgan("dev"));
app.use(express.json());
app.use(cookie());
app.use('/api', controllers);

app.use((req, res, next) => {
    console.log(req.path, req.method)
    next()
  })
const PORT = 5001;
console.log("db is " + db);

db.connect();
console.log("CONNECTED");


app.listen(5001)