var express = require('express');
var router = express.Router();

/* GET users listing. */
router.get('/', function(req, res) {
	
	var spawn = require('child_process').spawn;
	var child = spawn('C:\\Python34\\python34.exe',['C:\\Users\\ennima\\Documents\\soft\\aurotam\\test2\\testShell.py']);

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

module.exports = router;
