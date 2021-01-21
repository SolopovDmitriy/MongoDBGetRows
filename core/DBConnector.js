'use strict'
const CONFIG = require('../config');
const MongoClient = require('mongodb');

class DBConnector {
    static execute(callback) {
        const connectionString = "mongodb://" + CONFIG.DB.LOGIN + ":" +
            CONFIG.DB.PASSWORD + "@" +
            CONFIG.DB.HOST + ":" +
            CONFIG.DB.PORT;
        MongoClient.connect(connectionString,
            {useUnifiedTopology: true},
            function (err, connection) {
                if (err) throw  err;
                if (typeof callback === 'function') {
                    callback(connection);
                }
            })
    }
}

module.exports = DBConnector;
/*
DBConnector.execute(function (connection) {

    connection.close();
});*/
