const express = require('express')
const bodyParser = require('body-parser')
const app = express()
const fs = require('fs');
const mongoose = require('mongoose')
const { promise } = require('selenium-webdriver')

// mongoose.Promise = Promise
// mongoose.connect('mongodb://localhost:27017')
// .then(()=> console.log('mongoose up'))


 
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: true}));

const routes = require('../src/api/routes.js')(app,fs)
//  app.post('/api/register',(req,res)=>{ 
//     console.log(req.body);
// });
app.get('/',  (req, res)=> {
    res.send('Hello World')
  });

  
   
//   app.listen(3000)


 
app.listen(1234,()=>console.log('lisning at http://localhost:1234'))