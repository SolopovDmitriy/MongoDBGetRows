'use strict';

let CONFIG = {
    SERVER: {
        HOST: '127.0.0.1',
        PORT: 8089
    },
    DB:{
        LOGIN:'admin',
        PASSWORD:"passw0rd",
        HOST:'localhost',
        PORT:'27017',
        NAME:'test'
    }
}

CONFIG = Object.freeze(CONFIG);

module.exports = CONFIG;