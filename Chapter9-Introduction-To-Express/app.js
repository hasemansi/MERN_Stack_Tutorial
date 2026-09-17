const express = require('express');

const app = express();

const PORT = 3000;

app.use("/", (req,res,next) => {
    console.log("first middleware", req.url, req.method);
    next();
});

app.use("/home", (req,res,next) => {
    console.log("home middleware",req.url, req.method );
    res.send("<h1>Welcome to Home Page</h1>");
});

app.use("/", (req,res,next) => {
    console.log("second middleware");
    res.send("<h1>Hello from express</h1>");
});

app.listen(PORT, () => {
    console.log(`Server is running on port http://localhost:${PORT}`);
});