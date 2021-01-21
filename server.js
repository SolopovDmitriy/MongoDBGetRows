'use strict';

const colors = require('colors');
const express = require('express');
const logger = require('morgan'); //логирование express app
const path = require('path');
const userRouter = require('./routes/userrouter');

var app = express(); //экземпляр сервера

//шаблонизатор ejs --start
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'ejs');
//шаблонизатор --end

app.use(logger('dev'));

app.use(express.json());

app.use(express.urlencoded({extended: false}));

app.use(express.static(path.join(__dirname, 'static')));

//использование роутера для обработки группы маршрутов
app.use('/user', userRouter);

//обработка маршрута в корень сайта
app.get('/', function (request, response) {
    response.render('index.ejs', {
        message:null,
        error:null,
        title:'Название сайта | Главная',
        currentPage:'partials/pages/index.ejs'
    });
});


//разместить самым последним !!!!!!
app.get('/*', function (request, response) {
    response.render('index.ejs', {
        message:null,
        error:null,
        title:'Название сайта | Страница не найдена',
        currentPage:'partials/pages/404.ejs'
    });
});



module.exports = app;