const express = require('express');
const app = express();

const server = require('http').createServer(app);

app.listen(5000);


   app.use(express.static(__dirname + '/public'), function (req,res) {

      console.log("user connected");


   });




console.log('connected to server');
