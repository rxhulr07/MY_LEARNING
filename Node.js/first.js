const fs = require('fs');
console.log("I am learning node js");

fs.writeFile("output.txt","Hey rahul",(err)=>{
    if(err) console.log("error occured");
    else console.log("Successfull");
})