// mySql 통신 추가
var mySql=require('mysql');
var connection = mySql.createConnection({
    host : 'localhost',
    user : 'root',
    password : 'root',
    port : 3306,
    database : 'weight_management'
});

var express=require('express');
var app = express();
app.use(express.static('public')); //정적 폴더 public
app.get('/memberdata', function(req, res){
    connection.query('SELECT * from Member', function(err, rows) {
        if(err) {
            console.log('error');
            throw err;
        }
        console.log('The solution is: ', rows);
        res.send(rows);
    });
})

app.get('/', function(req, res){ 
    res.send(index.html); // "public/index.html"로 리다이랙트
})
app.listen(3000, function(){ });// 3000 포트