var express = require('express');
var router = express.Router();
var bodyParser = require('body-parser');

router.use(bodyParser.json());  
router.use(bodyParser.urlencoded({ extended: false }));

var secretKey = "123",
	key,
	secret,
	user;

user = {
	title: 'Hey, this is login page.', 
	message: 'Hello there, you are now on login page.',
	authorised: false
};

router.post('/login', function (req, res) {  
	secret = req.body.secret;

	user.authorised = secret === secretKey ? true : false;
	res.render('login', user);
});

router.get('/login/:key', function (req, res) {  

	if(req.params.key == 'logout'){
		user.authorised = false;
		res.redirect('/login');
	}else{
		secret = req.params.key;
		user.authorised = secret === secretKey ? true : false;
		res.render('login', user);
	}

});

router.get('/login', function (req, res) {  
	res.render('login', user);
});

module.exports = router;
