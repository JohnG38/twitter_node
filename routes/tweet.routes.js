// route qui va etre en relation avec les actions contenues dans le controller tweet

const { createTweet, deleteTweet } = require('../controllers/tweet.controller');
const router = require('express').Router();


router.post('/new', createTweet);
router.get('/delete/:tweetId', deleteTweet );

module.exports = router;