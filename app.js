var express=require('express');
var app = express();

app.use('/weight-management',require('./routes/weight-management'));

app.listen(3000, function(){ });