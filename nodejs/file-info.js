var fs = require('fs');
fs.stat('./view/page.html', function(error,stats){
	console.log('Is file --> ' + stats.isFile());
	console.log(stats);
});

