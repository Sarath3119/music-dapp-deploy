var express = require('express');
var app = express();

app.use(express.static('src'));
app.use(express.static('../music-contract/build/contracts'));

app.get('/', function (req, res) {
  res.render('index.html');
});

app.listen(3000, function () {
  console.log('Music Dapp listening on port 3000!');
});