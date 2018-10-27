var express = require('express');
var app = express();

app.set('view engine', 'pug');
app.set('views','./views');

app.use(express.static('views'));

app.get('/first-template', function(req, res){
    res.render('first-template');
});

app.get('/gallery_template', function(req, res){
    res.render('gallery_template');
});

app.listen(3000);
app.use(function (req, res, next) {
    res.status(404).send('Wybacz, nie mogliśmy odnaleźć tego, czego żądasz!')
});