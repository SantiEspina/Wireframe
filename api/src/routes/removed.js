const server = require('express').Router();
const { Removed, Article } = require('../db.js');

server.post('/:id', async (req, res, next) => {
    try{
        await Removed.create({ _id: req.params.id });
        await Article.destroy({ where: { _id: req.params.id } });
        const newArticles = await Article.findAll();
        res.send(newArticles);
    } catch (err) {
        res.status(400).send(err)
    }
});

server.get('/', async (req, res, next) => {
    try{
        const removeds = await Removed.findAll();
        res.send(removeds)
    } catch (err) {
        res.status(400).send(err)
    }
});

server.delete('/', async(req, res, next) => {
    try{
        await Removed.destroy({ where: { _id: req.body.id } });
        res.send('removed removed!');
    } catch(err) {
        res.status(400).send(err)
    }
});

module.exports = server;
