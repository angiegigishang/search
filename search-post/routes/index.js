var express = require('express');
var router = express.Router();
var remote = require('./user.js');

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Express' });
});

router.post('/search', function(req, res, next) {

	var searchText = req.body.q;
	console.log(searchText);
	var url = 'http://api.bing.com/qsonhs.aspx?q=' + searchText;
	console.log(url);
	remote(url, res);
	
});

module.exports = router;
