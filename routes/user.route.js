const router = require('express').Router();
const {signup, signupForm} = require('../controllers/user.controller');

//route pour inscrire un user
router.get('/signup/form', signupForm);
router.post('/signup', signup);

module.exports = router;