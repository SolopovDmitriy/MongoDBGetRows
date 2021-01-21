'use strict';
const express = require('express');
const colors = require('colors');
const userRouter = express.Router();

//middleware - промежуточное по
userRouter.use(function (request, response, next) {
    console.log(
        colors.blue("MIDDLEWARE: ") +
        colors.yellow('UserRouter -> request: ' + new Date().toLocaleTimeString())
    )
    next();
});

userRouter.get('/loginin', function (request, response) {
    response.render('index.ejs', {
        message:null,
        error:null,
        title:'Название сайта | Аутентификация пользователя',
        currentPage:'partials/pages/loginin.ejs'
    });
});

userRouter.get('/register', function (request, response) {
    response.render('index.ejs', {
        message:null,
        error:null,
        title:'Название сайта | Регистрация нового пользователя',
        currentPage:'partials/pages/register.ejs'
    });
});

module.exports = userRouter;

