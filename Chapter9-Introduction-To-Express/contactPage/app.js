const express = require('express');
const app = express();
const PORT = 3000;

app.use((req, res, next) => {
    console.log("In First Middleware ", req.path, req.method);
    next();
});

app.use((req, res, next) => {
    console.log("In Second Middleware ", req.path, req.method);
    next();
});

// app.use((req, res, next) => {
//     console.log("In Third Middleware ", req.path, req.method);
//     res.send("<h1>Welcome to Express JS</h1>");
// });

app.get('/', (req, res) => {
    console.log("In GET / Middleware ", req.path, req.method);
    res.send("<h1>Hello, Express!</h1>");
});

app.get('/contact-us', (req,res) => {
    console.log("In GET /contact-us Middleware ", req.path, req.method);
    res.send(`
        <h1>Contact Us</h1>
        <form action="/contact-us" method ="POST">
            <input type="text" name="name" placeholder="Enter your name" required>
            <input type="email" name="email" placeholder="Enter your email" required>
            <input type="submit" value="Submit">
        </form>
    `);
});

app.post('/contact-us', (req, res) => {
    console.log("In POST /contact-us Middleware ", req.path, req.method);
    res.send("<h1>Thank you for contacting us!</h1>");
});

app.listen(PORT, () => {
    console.log(`Server is running on http://localhost:${PORT}`);
});
