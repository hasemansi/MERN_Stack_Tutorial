const http = require('http');
const fs = require('fs');

const PORT = 3000;

const server = http.createServer((req,res) => {
    if(req.url = '/'){
        res.setHeader('Content-Type','text/html');
        res.write('<html>');
        res.write('<head><title>My Details</title></head>');
        res.write('<body><h1>Enter Your Details</h1>');
        res.write('<form  action="/submit-details" method="POST">');
        res.write('<input type = "text" name = "username" placeholder = "Enter Your Name"<br>');

        res.write('<br><label for="male">Male : </label>');
        res.write('<input type="radio" id="male" name="gender" value="male" />');

        res.write('<label for="female">Female : </label>');
        res.write('<input type="radio" id="female" name="gender" value="female" />');

        res.write('<br><input type="submit" value="submit" />');

        res.write('</form>');
        res.write('</body>');
        res.write('</html>');
        return res.end();
    }
    else if(req.url.toLocaleLowerCase() === "/submit-details" && req.method == "POST"){
        fs.writeFileSync('user-details.txt','Mansi Hase');
        res.statusCode = 302 //redirect
        res.setHeader('Location','/');
    }
    res.setHeader('Content-Type','text/html');
    res.write('<html>');
    res.write('<head><title>Backend Learning</title></head>');
    res.write('<body><h1>Welcome My Learning Journey</h1></body>');
    res.write('</html>');
    return res.end();
});

server.listen(PORT,() => {
    console.log(`server is running on http://localhost:${PORT}`);
});
