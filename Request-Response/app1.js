const http = require('http');

const server = http.createServer((req,res) => {
    res.setHeader('Content-Type','text/html');
    res.write('<html>');
    res.write('<head><title>Complete Coding</title></head>');

    if(req.url === '/'){
        res.write('<h1>This is Home Page</h1>');
        return res.end();
    }
    else if(req.url.toLowerCase() ==='/blogs'){
        res.write('<h2>Welcome to my Blogs</h2>');
        return res.end();
    }
    res.write('<h2>This is Default Page</h2>');
    return res.end();
    
});

const PORT = 3000;

server.listen(PORT,() => {
    console.log(`server running on http://localhost:${PORT}`);
});