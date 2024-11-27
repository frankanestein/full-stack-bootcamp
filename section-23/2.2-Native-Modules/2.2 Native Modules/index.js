// this is using common JS rather than ECM!!!

const fs = require("fs");

fs.writeFile("message.txt", "Hello from NodeJS!",(err) => {
    if (err) throw err;
    console.log('The file has been saved!');
})

fs.readFile("message.txt",(err, data) => {
    if (err) throw err;
    console.log(data);              // This returns the data as a buffer since no options are specified
})

fs.readFile("./message.txt","utf-8",(err, data) => {
    if (err) throw err;
    console.log(data);              // This returns the data in UTF-8, so readable text
})