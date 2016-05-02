var express = require('express');
var bodyParser = require('body-parser');

var app = express();
var port = process.env.PORT || 1666;

app.use(bodyParser.urlencoded({ extended: true }));

app.get('/', function (req, res) {
  res.status(200).send('Çalışıyor...');
});

app.listen(port, function () {
  console.log('Listening on port ' + port);
});

app.post('/selam', function (req, res, next) {
  var userName = req.body.user_name;
  var bot = {
    text : userName + ' Ooo cahil bey hoşgeldiniz.'
  };
  // Loop otherwise..
  if (userName !== 'slackbot') {
    return res.status(200).json(bot);
  } else {
    return res.status(200).end();
  }
});
