
var express = require('express'),
  router = express.Router(),
  mongoose = require('mongoose'),
  Article = mongoose.model('Article');

// jQuery, jsdom
module.exports = function (app) {
  app.use('/', router);
};


router.get('/', function (req, res, next) {
  Article.find(function (err, articles) {
    if (err) return next(err);
    res.render('index', {
      title: 'Generator-Express MVC',
      articles: articles
    });
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
