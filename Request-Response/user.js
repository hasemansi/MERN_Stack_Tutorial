const http = require('http');
const fs = require('fs');

const PORT = 3000;

const server = http.createServer((req,res) => {
    res.setHeader('Content-Type','text/html');

    if(req.url === '/'){
        res.write('<html>')
        res.write('<head><title>Personal Details</title></head>');
        res.write('<body>');
       
        if(req.url = "/"){
            res.write('<form  action="/submit-details" method="POST">');
            res.write('<input type = "text" name = "username" placeholder = "Enter Your Name"<br>');

            res.write('<br><label for="male">Male : </label>');
            res.write('<input type="radio" id="male" name="gender" value="male" />');

            res.write('<label for="female">Female : </label>');
            res.write('<input type="radio" id="female" name="gender" value="female" />');

            res.write('<br><input type="submit" value="submit" />');

            res.write('</form></body></html>');
                return res.end();
            }
            else if(req.method = "POST" && req.url.toLocaleLowerCase() === "/submit-details"){
                fs.writeFileSync('user-details.txt','Mansi Hase');
                res.statusCode = 302 //redirect
                res.setHeader('Location',"/");
                return res.end();
            }

        return res.end();
    }
});

server.listen(PORT,() => {
    console.log(`server is running on http://localhost:${PORT}`);
});
