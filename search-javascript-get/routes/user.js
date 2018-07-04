/*var express = require('express');
var router = express.Router();

// GET users listing. 
router.get('/search', function(req, res, next) {
  var searchText = req.query.searchText;
  res.send('http://api.bing.com/qsonhs.aspx?q=' + searchText);
  console.log(url);
});

router.get('/search', function(req, res, next) {
	var searchText = req.query.searchText;
	var url = 'http://api.bing.com/qsonhs.aspx?q=' + searchText;
	//var url = 'http://api.bing.com/qsonhs.aspx?q=' + searchText;
	console.log(url);
	remote(url, res);
});

module.exports = router;*/

var superagent = require('superagent');


module.exports = function(url, res) {
	superagent.get(url).end(function(request, response){
		console.log(response.text);
		res.send(response.text);
	});
}
