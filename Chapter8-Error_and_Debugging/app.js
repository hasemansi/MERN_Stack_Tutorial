const http = require('http');
const syntaxError = require('./syntax');
const runtimeError = require('./runtime');
const logicalError = require('./logical');

const server = http.createServer((req, res) => {
    console.log(req.url,req.method);
    //syntaxError();
    //runtimeError();
    logicalError();
});

const PORT = 3000;

server.listen(PORT, () => {
    console.log(`Server is running on port http://localhost:${PORT}`);
});