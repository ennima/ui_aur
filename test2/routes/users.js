var express = require('express');
var router = express.Router();
var pyPath = "C:\\Users\\ennima\\Documents\\soft\\aurotam\\test2\\";
/* GET users listing. */
router.get('/', function(req, res) {
	
	var spawn = require('child_process').spawn;
	var child = spawn('C:\\Python34\\python34.exe',[pyPath+'testShell.py']);

	child.stdout.on('data', function (data) {
    	console.log('stdout: ' + data);
    	//res.send("Res: "+data);
    	if(data.toString().indexOf("listo") > -1) {
    		res.send("Res: "+data);
		}
	});

	child.stderr.on('data', function (data) {
	    console.log('stderr: ' + data);
	});
});

router.get('/lista',function(req,res){
	var spawn = require('child_process').spawn;
	var child = spawn('C:\\Python34\\python34.exe',[pyPath+'lista.py']);

	child.stdout.on('data', function (data) {
    	//console.log('stdout: ' + data);
    	//res.send("Res: "+data);
    	//console.log("--",+data.toString());
    	if(data.toString().indexOf("###") > -1) {
    		//res.send("Res: "+data);
    		console.log(data.toString());
    		items = data.toString().split("\r\n");
    		//console.log(items);
    		items.splice(items.indexOf('###'),1);
    		//console.log("Trim: ",items);
    		items.splice(items.indexOf(''),1);
    		console.log(items);
    		res.send(items);
		}
	});

	child.stderr.on('data', function (data) {
	    console.log('stderr: ' + data);
	});
});
module.exports = router;
