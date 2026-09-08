const {sumRequestHandler} = require('./sum');
const requestHandler = (req,res) =>{
    console.log(req.url, req.method);

    if(req.url === '/'){
        res.setHeader('content-type' , 'text/html');
        res.write(
            `<html>
            <head><title>Calculator</title></head>
            <body><h1>Welcome To Calculator</h1>
            <a href = "/calculator">Go to Calculator</a>
            </body>
            </html>
            `
        );
        return res.end();
    }
    else if(req.url.toLowerCase() === '/calculator'){
        res.setHeader('content-type' , 'text/html');
        res.write(
            `<html>
            <head><title>Calculator</title></head>
            <body><h1>Here is Calculator</h1>
            <form action = "/calculate-result" method = "POST">
            <input type = "text" placeholder = "enter first number" name = "num1"><br><br>
            <input type = "text" placeholder = "enter second number" name = "num2"><br><br>
            <input type = "submit" value = "Sum">
            </form>
            </body>
            </html>
            `
        );
        return res.end();
    }
    else if(req.url.toLowerCase() === '/calculate-result' && req.method === "POST"){
        return sumRequestHandler(req,res);
    }

    res.setHeader('content-type' , 'text/html');
        res.write(
            `<html>
            <head><title>Calculator</title></head>
            <body><h1>404 page does not exists</h1>
            <a href = "/">Go to Home</a>
            `
        );
        return res.end();
}

exports.requestHandler = requestHandler;