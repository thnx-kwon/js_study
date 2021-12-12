const fs = require('fs').promises;

fs.result = fs.readFile('./readme.txt').then((data) => {
    console.log(data);
    console.log(data.toString());
}).catch((err) =>{
    throw err;
});
