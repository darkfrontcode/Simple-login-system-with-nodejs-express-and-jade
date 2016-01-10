var express = require('express');
var router = express.Router();

var index = require('./pages/index');
var about = require('./pages/about');
var login = require('./pages/login');

router.get('/', index);
router.get('/about', about);
router.use(login);

module.exports = router;