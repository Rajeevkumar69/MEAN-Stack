const fs = require('fs');

// Create
fs.writeFileSync('files/lorem.txt', "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.");

// delete
fs.unlinkSync('files/lorem.txt');

// Read 
const fData = fs.readFileSync('files/apple.txt', 'utf-8' );
console.log(fData);;

// Update or append

fs.appendFileSync('files/apple.txt', ' and this is good for health');