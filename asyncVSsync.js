// console.log('apple1');   // sync code

// setTimeout(() => {
//     console.log('apple2'); // async code 
// }, 2000);
// console.log('apple3');  // sync code

const fs = require('fs');

// async code
fs.readFile('text/peter@gmail.com.txt', 'utf-8', (err, data) => {
    if (err) return

    if (data) console.log(data);

})

// sync code
console.log('end script');
