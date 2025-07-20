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
 if(req.url ==='/home'){
    res.write('<h1> welcome to home page </h1>')
    return res.end();
 }else if(req.url === '/men'){
    res.write('<h1> welcome to men page </h1>') 
    return res.end(); 
 }else if(req.url === '/women'){
    res.write('<h1> welcome to women page </h1>') 
    return res.end(); 
 }else if(req.url === '/cart'){
    res.write('<h1> welcome to cart page </h1>') 
    return res.end();
 }


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