const http = require('http');

const PORT = 3001;

const server = http.createServer((req,res) => {
    console.log(req.url,req.method);

    if(req.url === "/home"){
        res.write("<h1>Welcome to Home page<h1>");
        return res.end();
    }
    else if(req.url === "/men"){
        res.write("<h1>Welcome to Men page<h1>");
        return res.end();
    }
    else if(req.url === "/women"){
        res.write("<h1>Welcome to Women page<h1>");
        return res.end();
    }
    else if(req.url === "/kids"){
        res.write("<h1>Welcome to Kids page<h1>");
        return res.end();
    }
    else if(req.url === "/cart"){
        res.write("<h1>Welcome to Cart page<h1>");
        return res.end();
    }

    res.setHeader('content-type' , 'text/html');
    res.write(`
        <html>
            <head><title>Navigation Bar</title></head>
            <body>
                <head>
                    <nav>
                        <ul>
                            <li><a href = "/home">Home</a></li>
                            <li><a href = "/men">Men</a></li>
                            <li><a href = "/women">Women</a></li>
                            <li><a href = "/kids">Kids</a></li>
                            <li><a href = "/cart">Cart</a></li>
                        </ul>
                    </nav>
                </head>
            </body>
        </html>
    `);
    return res.end();
});

server.listen(PORT, () => {
    console.log(`server running on http://localhost:${PORT}`);
});
