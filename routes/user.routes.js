// route qui va etre en relation avec les actions contenues dans le controller user

const router = require('express').Router();
const { ensureAuthenticated } = require('../config/security.config');
const {signup, signupForm, uploadImage, displayProfile} = require('../controllers/user.controller');

router.get('/signup/form', signupForm);
router.post('/signup', signup);
router.post('/update/image', ensureAuthenticated, uploadImage);
router.get('/:username', ensureAuthenticated, displayProfile)


module.exports = router;