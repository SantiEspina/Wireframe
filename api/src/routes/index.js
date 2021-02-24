const { Router } = require('express');

const articleRouter = require('./article');
const removedRouter = require('./removed');

const router = Router();

router.use('/articles', articleRouter);
router.use('/removeds', removedRouter);

module.exports = router;
