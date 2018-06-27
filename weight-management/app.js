var express=require('express');
var app = express();
app.use(express.static('public')); //정적 폴더 public
app.get('/', function(req, res){ // "/" 경로로 들어오면
    res.send(index.html); // "public/index.html"로 리다이랙트
})
app.listen(3000, function(){ });// 3000 포트