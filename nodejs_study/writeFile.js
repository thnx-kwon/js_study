const fs = require('fs').promises;

fs.result = fs.writeFile('./writeme.txt', '글이 입력됩니다.bc').then(() => {
    return fs.readFile('./writeme.txt');
}).then((data) => {
    console.log(data.toString());
}).catch((err) =>{
    throw err;
});
