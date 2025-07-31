const path =  require('path');
const file = "text/peter@gmail.com.txt";



console.log(path.extname(file));

console.log(path.isAbsolute(file));

console.log(path.resolve("text", "peter@gmail.com.txt"));

console.log(__dirname);

console.log(__filename);
