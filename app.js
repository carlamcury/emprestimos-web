'use strict';

 
let express = require('express');
let app = express();
let expressStaticGzip = require("express-static-gzip");
 
  
app.use('/', expressStaticGzip( __dirname +  '/public'));
 
process.env.PORT = process.env.PORT || 8080 ;
app.listen(process.env.PORT, function () {
    console.info( `PROCESS POWER INIT  EMPRESTIMO-WEB ON PORT ${process.env.PORT}`)
});