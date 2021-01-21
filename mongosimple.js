const connectionString = "mongodb://admin:passw0rd@localhost:27017";

const MongoClient = require('mongodb').MongoClient;
const ObjectId = require('mongodb').ObjectId;

const colors = require('colors');

// MongoClient.connect(connectionString,
//         {useUnifiedTopology:true},
//         function (err, connector) {
//                     if(err) throw err;
//                     console.log(colors.green("Connection created"));
//
//
//                     var testDB = connector.db('test');
//
//                     // testDB.createCollection('peoples', function (err, result) {
//                     //     if(err) throw err;
//                     //     console.dir(result);
//                     //     connector.close();
//                     // });
//
//                     // testDB.listCollections().toArray(function (err, collInfo) {
//                     //     if(err) throw err;
//                     //     console.log(collInfo);
//                     //     connector.close();
//                     // })
//
//                     /*testDB.collection('products').rename('orders', function (err, result) {
//                         if(result){
//                             console.log(colors.blue('Коллекция переименована'));
//                         }
//                         connector.close();
//                     })*/
//
//                     /*testDB.collection('orders').drop(function (err, result) {
//                         if(err) throw err;
//                         console.log(colors.blue('Коллекция удалена'));
//                         connector.close();
//                     });*/
//
//
//                     /*var Peoples = testDB.createCollection('peoples', function (err, result) {
//                         var vasjaP = {
//                             name:'Вася',
//                             email:'vasja@com.u',
//                             password:'123455'
//                         }
//                         Peoples = testDB.collection('peoples');
//                         Peoples.insertOne(vasjaP, function (err, result) {
//                             if(err) throw err;
//                             if(result) console.log(colors.red("Вася добавлен"));
//                             connector.close();
//                         });
//                     });*/
//
//
//             var Peoples = testDB.collection('peoples');
//             // var person = {name : 'Nick'};
//             // Peoples.insertOne(person, function (err, result) {
//             //     if(err) throw err;
//             //     if(result) console.log(colors.red(person.name + " добавлен"));
//             //     connector.close();
//             // });
//
//
//             // Peoples.find({}).toArray(function (err, result) {
//             //     if(err) throw err;
//             //     console.log(result);
//             //     connector.close();
//             // });
//
//             /*Peoples.find({name:'Дункан МакКлауд'}).toArray(function (err, result) {
//                 if(err) throw err;
//                 console.log(result);
//                 connector.close();
//             });*/
//             /*Peoples.findOne({name:'Дункан МакКлауд'}, function (err, result) {
//                 if(err) throw err;
//                 console.log(result);
//                 connector.close();
//             });*/
//             //-1 DESC
//             //1 ASC
//            /* var nameSort = {name: -1};
//             Peoples.find({}).sort(nameSort).toArray(function (err, result) {
//                 if(err) throw err;
//                 console.log(result);
//                 connector.close();
//             });*/
//
//             /*Peoples.deleteOne({name:'Дункан МакКлауд'}, function (err, result) {
//                 if(err) throw err;
//                 if(result.deletedCount == 1){
//                     console.log(colors.red('Дункан МакКлауд мертв'))
//                 }
//                 connector.close();
//             });*/
//
//             var _idDunkan = '6005d669d55e5c206cb56e69';
//
//             var queryWhat = {_id:ObjectId(_idDunkan)};
//
//             /*Peoples.updateOne(queryWhat, {
//                 $set:{
//                     name:"Дункан МакКлауд мл",
//                     age:1500,
//                     gender:'male'
//                 }
//             }, function (err, result) {
//                 if(err) throw err;
//                 console.log("Строка была обновлена");
//
//                 connector.close();
//             });*/
//
//             // Peoples.findOne(queryWhat, function (err, result) {
//             //     if(err) throw err;
//             //     console.log(result);
//             //     connector.close();
//             // });
// });



var BasicDB = require('./core/BasicDB');
var Peoples = new BasicDB('peoples');

// Peoples.getIdRow({name:'Alex'}, function (id) {
//     console.log("Искомый идентификатор: " + id);
// });

Peoples.getAllRows({}, 'name', 'DESC',0, 10, function (persons) {
    persons.forEach(x => console.log(x));
});

// deleteOneRow
// Peoples.deleteOneRow({name: 'Peter4'}, function(result){
//     console.log("Deleted " + result.deletedCount + " row(s)");
// });


// insert one person

// Peoples.insertOneRow({name: 'Peter3', age: 15}, function(result){
//     if(result){
//         console.log("person has been inserted");
//     }
// });


// update Nick to Nick2
Peoples.updateOneRow({name: 'Peter4'}, {name: 'Victor', age: 30},function(result){
    if(result){
        console.log("person has been updated");
    }
});

// CRUD = Create Read Update Delete