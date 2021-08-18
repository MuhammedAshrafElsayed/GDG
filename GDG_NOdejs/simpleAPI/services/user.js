const userRepo = require('../repos/userRepo'); 
function getAllUsers () {
    return userRepo.getAllUsers();
}

module.exports = { 
    getAllUsers
}