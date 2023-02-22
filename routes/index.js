const { tweetList } = require('../controllers/tweet.controller');

const router = require('express').Router();
const tweet = require('./tweet.routes');

router.use('/tweet', tweet);

router.get('/', tweetList);

module.exports = router;

