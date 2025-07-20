// const fs = require('fs');
// console.log("I am learning node js");

// fs.writeFile("output.txt","Hey rahul",(err)=>{
//     if(err) console.log("error occured");
//     else console.log("Successfull");
// })

// practice question

const http = require('http');
const PORT = 3000;

const server = http.createServer((req, res) =>{
console.log(req.headers);
res.write(
    `<head>
    <title>Nav links</title>
</head>
<body>
    <head>
        <nav>
            <ul>
                <li> <a href="/home"> home</a></li>
                <li> <a href="/men"> men</a></li>
                <li> <a href="/women"> women</a></li>
                <li> <a href="/cart"> cart</a></li>
            </ul>
        </nav>
    </head> 
</body>
</html>  `
)
});
server.listen(PORT, ()=> {
 console.log(`server is runing on ${PORT}`)
});