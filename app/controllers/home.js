
var express = require('express'),
  router = express.Router();

// jQuery, jsdom
module.exports = function (app) {
  app.use('/', router);
};


router.get('/', function (req, res, next) {

    res.render('index', {
      title: 'Generator-Express MVC'
    });

});

router.post('/', function (req,res) {
	var login = req.body.login;
	var password = req.body.password;

	if ((login == 123) && (password == 123)){
		res.render('success');
	} else {
		res.render('failure');
	}
})
