'use strict'

var express = require('express');

var app = express();

app.set('view engine','ejs');

app.use('/assets',express.static('./assets'));

var http = require('http');

var server = http.createServer(app);

/* get edison file */

var edison = require("./controllers/edison");

app.get('/',(req,res)=>{
    res.render('index');
})

app.get('/toggle',(req,res)=>{
    edison.ledToggle();
    res.send(edison.ledState());
    console.log("Server send : "+edison.ledState());
})

server.listen(8090,'192.168.43.221');
