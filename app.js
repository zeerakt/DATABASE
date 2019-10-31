const express = require('express');
const app = express();
const fs = require('fs');

app.get('/',(req,res)=>{
        res.send("<div class ='container'><nav><span>Home </span><span>Contact </span><span>Info </span></nav><h1>Hello World</h1></div>");

}).listen('4000');
