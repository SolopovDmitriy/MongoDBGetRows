'use strict'
const CONFIG = require('../config');
const DBConnector = require('./DBConnector');

class BasicDB {
    constructor(collection) {
        var _collectionName = collection; //valid
        this.getCollectionName = function () {
            return _collectionName;
        }
    }

    getIdRow(searchPattern = {}, callback) {
        DBConnector.execute(function (conn) {
            var _base = conn.db(CONFIG.DB.NAME); //ссылка на базу данных
            var curCollection = _base.collection(this.getCollectionName());
            curCollection.findOne(searchPattern, function (err, row) {
                conn.close();
                if (err) throw err;
                if (typeof callback === 'function') {
                    callback(row._id);
                }
            })
        }.bind(this));
    }

    deleteOneRow(searchPattern, callback) {
        DBConnector.execute(function (conn) {
            var _base = conn.db(CONFIG.DB.NAME); //ссылка на базу данных
            var curCollection = _base.collection(this.getCollectionName());
            curCollection.deleteOne(searchPattern, function (err, result) {
                conn.close();
                if (err) throw err;
                if (typeof callback === 'function') {
                    callback(result);
                }
            })
        }.bind(this));
    }

    insertOneRow(person, callback) {
        DBConnector.execute(function (conn) {
            var _base = conn.db(CONFIG.DB.NAME); //ссылка на базу данных
            var curCollection = _base.collection(this.getCollectionName());
            curCollection.insertOne(person, function (err, result) {
                conn.close();
                if (err) throw err;
                if (typeof callback === 'function') {
                    if(result){
                        callback(true);
                    }
                }
            })
        }.bind(this));
    }

    updateOneRow(queryWhat, new_person, callback) {
        DBConnector.execute(function (conn) {
            var _base = conn.db(CONFIG.DB.NAME); //ссылка на базу данных
            var curCollection = _base.collection(this.getCollectionName());
            curCollection.updateOne(queryWhat, {$set: new_person}, function (err, result) {
                conn.close();
                if (err) throw err;
                if (typeof callback === 'function') {
                    if(result){
                        callback(true);
                    }
                }
            });
        }.bind(this));
    }


    getAllRows(searchPattern, order_col, direction_of_sort, min, max, callback){
        DBConnector.execute(function(conn){
            var _base = conn.db(CONFIG.DB.NAME);
            var curCollection = _base.collection(this.getCollectionName());
            // if(sort === 'ASC') sort = {order_col: 1};
            // else sort = {order_col: -1};
            var sort = {};
            if(direction_of_sort === 'ASC') {
                sort[order_col] = 1; //   {age : 1}
            }
            else {
                sort[order_col] = - 1; // {age : -1}
            }
            curCollection.find(searchPattern).sort(sort).limit(max).toArray(function(err, rows){
                conn.close();
                if(err) throw err;
                if(typeof callback === 'function'){
                    callback(rows);
                }
            })
        }.bind(this));
    }

    // getOneRow(searchPattern, callback) {
    //     this.getAllRows(searchPattern, 0, 1, 'ASC', function (oneRow) {
    //         if (typeof callback === 'function') {
    //             callback(oneRow);
    //         }
    //     })
    // }




}

module.exports = BasicDB;
// CRUD: CREATE READ UPDATE DELETE




// getAllRows(searchPattern, order_col, sort='ASC', min = 0, max = 100, callback){
//     DBConnector.execute(function(conn){
//         var _base = conn.db(CONFIG.DB.NAME);
//         var curCollection = _base.collection(this.getCollectionName());
//         if(sort === 'ASC') sort = {order_col: 1};
//         else sort = {order_col: -1};
//         curCollection.find(searchPattern).sort(sort).toArray(function(err, rows){
//             conn.close();
//             if(err) throw err;
//             if(typeof callback === 'function'){
//                 callback(rows);
//             }
//         })
//     }.bind(this));
// }