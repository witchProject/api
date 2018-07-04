var express=require('express');
var router = express.Router();

// mySql 통신 추가
var mySql=require('mysql');
var connection = mySql.createConnection({
    host : 'localhost',
    user : 'root',
    password : 'root',
    port : 3306,
    database : 'weight_management'
});

router.get('/members', function(req, res){
    connection.query('SELECT * from Member', function(err, rows) {
        if(err) { throw err; }
        res.send(rows);
    });
});

router.get(['/weights', '/weights/:memberNo'], function(req, res){
    
    var memberNo = req.params.memberNo;
    var query = 'SELECT * FROM Weight';
    if(memberNo){
        query = query +" WHERE member_no = '" + memberNo +"'";
    }
    console.log(query);
    connection.query(query, function(err, rows) {
        if(err) { throw err; }
        res.send(rows);
    });
});

router.get('/login/naver', function(req, res){
    console.log("It is Naver Login!");
    var clientId = "네이버에서 받은 client_id";
    var redirectURI = "http://127.0.0.1:3000/weight-management/login/naver/callback";
    var state = "state 원하는거 아무 문자열";
    api_url = 'https://nid.naver.com/oauth2.0/authorize?response_type=code&client_id=' + clientId + '&redirect_uri=' + redirectURI + '&state=' + state;
    res.writeHead(200, {'Content-Type': 'text/html;charset=utf-8'});
    res.end("<a href='"+ api_url + "'><img height='50' src='http://static.nid.naver.com/oauth/small_g_in.PNG'/></a>");
});

router.get('/login/naver/callback', function(req, res){
    console.log("It is Naver Login callback!");
});

module.exports = router;