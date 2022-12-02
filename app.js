// requries 
const express = require('express');
const bcrypt = require('bcrypt')
const app = express();
const port = 3000; 
const cors = require('cors');
const authenRouter = require('./routes/authenticationRouter.js');
const scheduleDropOff = require("./routes/scheduleDonationRouter.js")
// middleware
app.use(express.json());
app.use(cors());
app.use('/authentication', authenRouter);
// app.use('/dropoff', scheduleDropOff);


app.get('/', (req, res) => {
  res.send('Hello World!');
});

app.listen(port, () =>
  console.log(`Example app listening on port 3000!`),
);