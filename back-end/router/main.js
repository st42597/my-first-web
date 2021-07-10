const express = require('express');
const app = module.exports = express();


app.get('/',function(req,res){
    res.send(`normal`)
});
app.get('/about',function(req,res){
    res.send(`about`)
});