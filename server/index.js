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
=======

app.use(express.static(path.join(__dirname, 'client/build')));
app.get('*', (req, res) => {
  res.sendFile(path.join(__dirname + '/client/build/index.html'))
})

app.set( 'port', (process.env.PORT || 5000));

>>>>>>> 87799e11e9b814fc2cb76e70fc6721ff83787865
console.log("db is " + db);

db.connect();
console.log("CONNECTED");


<<<<<<< HEAD
app.listen(PORT)
=======
app.listen(app.get('port'), function() {
  console.log("Node server running on port " + app.get('port'));
})
>>>>>>> 87799e11e9b814fc2cb76e70fc6721ff83787865
