const http = require('http');

// function requestListener(req, res){
//     console.log(req);
// }

// http.createServer(function (req, res){
//     console.log(req);
// })

const server = http.createServer((req, res)=>{
    // console.log(req);
     console.log(req.url, req.method, req.headers);
    process.exit(); // stops the server
});

const PORT = 3000;
server.listen(PORT, ()=>{
console.log(`Sever is running at Port http:localhost:${PORT}`)
});