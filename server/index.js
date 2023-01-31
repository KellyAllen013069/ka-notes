const express = require('express');
const dotenv = require('dotenv').config()
const db = require('./routes/db-config');
const cookie = require('cookie-parser');
const controllers = require('./controllers/app')
const cors = require('cors');
const morgan = require('morgan');
const {join} = require('path');

const app = express();
app.use(cors())
app.use(morgan("dev"));
app.use(express.json());
app.use(cookie());
app.use('/api', controllers);

app.use(express.static(join(__dirname, "../client/build")));


app.use((req, res, next) => {
  res.sendFile(join(__dirname, "../client/build/index.html"));
    next()
  })
<<<<<<< HEAD
const PORT = process.env.PORT || 5000;

app.set( 'port', (process.env.PORT || 5000));

console.log("db is " + db);

db.connect();
console.log("CONNECTED");

app.listen(app.get('port'), function() {
  console.log("Node server running on port " + app.get('port'));
})
>>>>>>> 87799e11e9b814fc2cb76e70fc6721ff83787865
