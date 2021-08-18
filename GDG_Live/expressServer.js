const express = require('express');
const app = express();
const port = 3000;
 const MW1 = (req, res, next) => {
     console.log('MW1', req.params);
      next();
 }
 const MW2 = (req, res, next) => {
    console.log('MW2');
     next();
}
const MW3 = (req, res, next) => {
    console.log('MW3');
    res.send('done');
    next();
}
app.get('/hamada/',MW1, MW2,MW3);
app.get('/hamada',MW3);
/*
use = [mw1,mw2,mw3]
next = (index) => {
    use[index++] (this.req,this.res)
}
 (req,res) => {
     this.req, this.res
    foreach use mw
    mw(req,res) 
} */
app.listen(port);