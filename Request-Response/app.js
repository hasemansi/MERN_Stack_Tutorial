const http = require('http');

const server = http.createServer((req,res) => {
    console.log(req)
    res.setHeader('Content-Type' , 'text/html');
    res.write('<html>');
    res.write('<head><title>Learning MERN-Stack</title></head>');
    res.write('<body>Wlcome to my Learning Tutorial</body>');
    res.write('</html>');
});

const PORT = 3000;

server.listen(PORT, () => {
    console.log(`server running on http://localhost:${PORT}`);
});