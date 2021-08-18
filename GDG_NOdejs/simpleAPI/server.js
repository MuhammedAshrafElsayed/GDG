const express = require('express');
const helper = require('../utils/serverHelpers');
const userController = require('./controllers/user')
const app = express();
const port = 3060;
app.use((req, res, next) => {
    console.log(req.query);
    helper.logRequestasync('logs.txt', { pathname: req.path, query: req.query, date: new Date().toISOString() })
    .then(() => next())
    .catch((err) => next(err));
});

app.get('/users', userController.getUsers);

app.use((err, req,res,next) => {
    console.log('error middleware',err);
    res.status(500).send(err);
})
app.listen(port, () => {
    console.log('server is started on port', port);
})