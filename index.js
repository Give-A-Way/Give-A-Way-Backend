// requries 
require('dotenv').config();
const express = require('express');
const path = require('path');


const authenRouter = require('./routes/authenticationRouter.js');
const donationRouter = require("./routes/scheduleDonationRouter.js");

const app = express();

const port = 3000; 




// middleware
app.use(express.json()); // parse incoming request bodies as JSON
app.use('/authentication', authenRouter);
app.use('/listings', donationRouter);

app.get('/', (req, res) => {
  res.send('Hello World!');
});

// app.get('/listings', async (req, res) => {
//     const listings = pool.query("SELECT * FROM public.church_listings").then(result=> {return result.rows});
//   console.log(listings);
//   listings.forEach(element => {
//     console.log(`INSERT INTO table_name (church_name, location, img, phone_number, request_type,status) VALUES(${element.church_name},${element.location},${element.img},${element.phone_number},${element.request_type},${element.status})`)
//   });
//   });
  
app.listen(port, () =>
  console.log(`Example app listening on port 3100!`),
);
