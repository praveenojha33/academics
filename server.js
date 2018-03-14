var express=require('express');
var path =require('path');
var bodyParser= require('body-parser');

var index=require('./routes/index');
var tasks =require('./routes.tasks');
var port=3000;
var app=express();
app.set('view',path.join(__dirname,'views'));
app.set('view engine','ejs');
app.engine('html',require('ejs').renderFile;

app.use(express.static(path.join(__diename,'client')));
app.use(bodyParser.json());
app.use(bodeyParser.urlencoded({extended:false}));
app.use('/',index);
app.use9'/api',tasks);
app.listen(port,function(){
	console.log('Server started on port ',port);
});