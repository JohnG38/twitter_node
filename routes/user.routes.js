// route qui va etre en relation avec les actions contenues dans le controller user

const router = require('express').Router();
const {signup, signupForm} = require('../controllers/user.controller');

router.get('/signup/form', signupForm);
router.post('/signup', signup);

module.exports = router;