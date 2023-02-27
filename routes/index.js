const router = require('express').Router();
const tweet = require('./tweet.routes');
const userRoute = require('./tweet.routes');
const { tweetList } = require('../controllers/tweet.controller');

router.use('/tweet', tweetRoute);
router.use('/user', userRoute);

router.get('/', tweetList);


module.exports = router;

