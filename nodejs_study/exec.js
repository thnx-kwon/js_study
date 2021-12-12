const exec = require('child_process').exec;

let process = exec('dir');

process.stdout.on('data', function(data) {
    console.log(data.toString());
});