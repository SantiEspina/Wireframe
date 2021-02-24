const server = require('express').Router();
const { Article } = require('../db.js');

server.get('/', async (req, res, next) => {
    try{
        const articles = await Article.findAll();
        res.send(articles)
    } catch(err) {
        res.send(err)
    }
});

module.exports = server;