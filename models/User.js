const BasicDB = require('../core/BasicDB');

class User extends BasicDB {
    constructor() {
        super('users');
    }
    changePassword(id_user, oldPass, newPass, callback){

        var updatedUser = null;
        //полезная работа
        if (typeof  callback === 'function'){
            callback(updatedUser);
        }
    }
}

module.exports = User;

/*
var userSchema = new Schema({
    name:'',
    surname:'',
    birthDate:new Date(),
    gender:'undefind'
});

userSchema.push({
    name:'Alex',
    gender:"man",
    birthDate:new Date(1995, 5, 25),
    weight:85
});
*/