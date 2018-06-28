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

app.set('views', __dirname + '/views');
app.set('view engine', 'ejs');

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

app.get('/', function(req, res) { 
    connection.query('SELECT * FROM Weight', function (err, result, fields) {
        if (err) throw err;
        res.render('index', {weights: result});
    });
});

app.use(express.static('public')); //정적 폴더 public
app.listen(3000, function(){ });// 3000 포트