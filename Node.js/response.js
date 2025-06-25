const http = require('http');
const fs = require('fs');


const server = http.createServer((req, res)=>{
    console.log(req.url, req.method, req.headers);
    if(req.url === '/' ){  
    // res.setHeader('Content-Type', 'text/html');
    // res.write('<html>');
    // res.write('<head><title>Learning Nodejs </title></head>');
    // res.write('<body><h1> Welcome to home page </h1></body>');
    // res.write('</html>');

    res.setHeader('Content-Type','text/html');
    res.write('<html>');
    res.write('<head><title>Products Form</title></head>');
    res.write('<body>');
    res.write('<h1>Add a Product</h1>');
    res.write('<form action="/submit-product" method="POST">');
    res.write('  <label for="name">Product Name:</label>');
    res.write('  <input type="text" id="name" name="name" required><br><br>');
    res.write('  <label for="price">Price:</label>');
    res.write('  <input type="number" step="0.01" id="price" name="price" required><br><br>');
    res.write('  <button type="submit">Submit</button>');
    res.write('</form>');
    res.write('</body>');
    res.write('</html>');
    return res.end();

    }else if(req.url.toLowerCase() === '/submit-product' && req.method == 'POST'){
        fs.writeFileSync('user.txt', 'Rahul ranjan');
        res.statusCode = 302;
        res.setHeader('Location', '/');
        return res.end();
    }
// }else if(req.url === '/products'){

//      res.setHeader('Content-Type', 'text/html');
//      res.write('<html>');
//      res.write('<head><title>Learning Nodejs </title></head>');
//      res.write('<body><h1> products page</h1></body>');
//      res.write('</html>');
//     return res.end();


res.setHeader('Content-Type', 'text/html');
res.write('<html>');
res.write('<head><title>Learning Nodejs </title></head>');
res.write('<body><h1> Day 1 of Learning Nodejs</h1></body>');
res.write('</html>');
return res.end();   
});

// res.setHeader('Content-Type', 'text/html');
// res.write('<html>');
// res.write('<head><title>Learning Nodejs </title></head>');
// res.write('<body><h1> Day 1 of Learning Nodejs</h1></body>');
// res.write('</html>');
// return res.end();   
// });

const PORT = 3000;
server.listen(PORT, ()=>{
console.log(`Sever is running at Port http:localhost:${PORT}`)
});