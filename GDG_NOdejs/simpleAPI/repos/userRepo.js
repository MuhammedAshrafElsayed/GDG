const userModel = require('../models/user');

const users = [];

    for (let index = 0; index < 100; index++) {
        users.push( new userModel.User('Mohamed'+index,'010'+index, index+'_gdg@gdg.com'));
    }
function getAllUsers() {

    return new Promise((resolve) => {
        setTimeout(()=> resolve(users),3000);
    });
}

module.exports = {
    getAllUsers
}