const express = require('express');
const fs = require('fs');
const app = express();
const port = 3070;
const helper = require('../utils/serverHelpers');
app.use((req, res, next) => {
    helper.logRequestasync('logs.txt', { pathname: req.path, query: req.query, date: new Date().toISOString() })
    .then(() => next())
    .catch((err) => next(err));
});

app.get('/index', (req, res, next) => {
    res.status(200).sendFile(`index.html`,{root:'./html'},(err) => next(err));
});

app.use((err, req,res,next) => {
    console.log('error middleware',err);
    res.status(500).send(err);
})
app.listen(port, () => {
    console.log('server is started on port', port);
})