// requries 
const express = require('express');
const bcrypt = require('bcrypt')
const app = express();
const port = 3100; 
const cors = require('cors');
const authenRouter = require('./routes/authenticationRouter.js');
const donationRouter = require("./routes/scheduleDonationRouter.js");
const pool = require('./db.js');
// middleware
app.use(express.json());
app.use(cors());
app.use('/authentication', authenRouter);
app.use('/listings', donationRouter);


app.get('/', (req, res) => {
  res.send('Hello World!');
});

app.get('/listings', async (req, res) => {
    const listings = pool.query("SELECT * FROM public.church_listings").then(result=> {return result.rows});
    console.log(listings)
  });
  
app.listen(port, () =>
  console.log(`Example app listening on port 3100!`),
);














