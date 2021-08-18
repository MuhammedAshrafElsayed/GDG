const userService = require('../services/user');

const getUsers =  (req, res, next) => {
    userService.getAllUsers().then((data)=>  {
        console.log('alexa','data', data);
        
        res.setHeader('cache-control', 'max-age=300');
        res.send(data);
    });
}

module.exports = {getUsers}