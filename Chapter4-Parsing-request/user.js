const http = require('http');
const fs = require('fs');

const PORT = 3000;

const server = http.createServer((req,res) => {
    if(req.url === '/'){
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
        const body = [];
        req.on('data',chunk => {
            console.log(chunk);
            //<Buffer 75 73 65 72 6e 61 6d 65 3d 4d 61 6e 73 69 2b 48 61 73 65 26 67 65 6e 64 65 72 3d 66 65 6d 61 6c 65>
            body.push(chunk);
        });

        req.on('end',() => {
            const fullBody = Buffer.concat(body).toString();
            console.log(fullBody);
            //username=Mansi+Hase&gender=female

            //parsing the request
            const params = new URLSearchParams(fullBody);
            // const bodyObject = {};
            // for(const[key,val] of params.entries()){
            //     bodyObject[key] = val;
            // }

            const bodyObject = Object.fromEntries(params);
            console.log(bodyObject);
            //{ username: 'Rushi Hase', gender: 'male' }
        });
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
