var express=require('express');
var app = express();
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

console.log('I am here!');

router.get('/members', function(req, res){
    console.log('I am Members');
    connection.query('SELECT * from Member', function(err, rows) {
        if(err) { throw err; }
        res.send(rows);
    });
})

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
})

module.exports = router;