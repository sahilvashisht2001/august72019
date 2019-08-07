var express=require('express')
var app=express()

app.get('/',function(req,res){
    res.send('Hell World')
});

app.post('/',function(req,res){
    res.send('Hell World')
});

app.listen(3000);
