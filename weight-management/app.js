var express=require('express');
var app = express();

app.set('views', __dirname + '/views');
app.set('view engine', 'ejs');

app.use(express.static('public')); //정적 폴더 public
app.use('/api',require('./routes/api.js')); // api 요청시 api.js 참조

app.get('/', function(req, res) {  
    res.send(index.html);
});

app.listen(3000, function(){ });// 3000 포트