const sumRequestHandler = (req,res) => {
    console.log("In sum requset Handler", req.url);

    const body = [];
    req.on('data',chunk => body.push(chunk)); //reading chunk
    req.on('end', () => {
        const bodyStr = Buffer.concat(body).toString();
        const params = new URLSearchParams(bodyStr);
        const bodyObject = Object.fromEntries(params);
        const result = Number(bodyObject.num1) + Number(bodyObject.num2);
        console.log(result);

        res.setHeader('content-type' , 'text/html');
        res.write(
            `<html>
            <head><title>Calculator</title></head>
            <body><h1>Your Sum is ${result}</h1>
            </body>
            </html>
            `
        );
        return res.end();
    });
}

exports.sumRequestHandler = sumRequestHandler;