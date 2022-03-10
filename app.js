//console.log("process: ", process);
//const http = require("http");

//import for formula
const helpers = require("./helpers");

//using express
const express = require('express');
const app = express();

//build a server with express
app.get('/', (req, res) => {
    res.send("I am here express");
});

app.listen(3000);

//build a server
/*
const server = http.createServer((req, res) => {
    res.end("hello world from node js");
});

server.listen(3000);
*/

const total = helpers.sum(10, 200);

console.log("TOTAL " + total);