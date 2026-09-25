const express = require('express');
const hostRouter = express.Router();
const path = require('path');
const rootDir = require('../utils/pathUtil');

hostRouter.get('/add-home', (req,res) => {
    console.log("In GET /add-home Middleware ", req.path, req.method);
    // res.send(`
    //     <h1>Add Home</h1>
    //     <form action="/host/add-home" method ="POST">
    //         <input type="text" name="homeName" placeholder="Enter your Home Name" required>
    //         <input type="submit" value="Submit">
    //     </form>
    // `);

    res.sendFile(path.join(rootDir, 'views', 'addHome.html'));
});

const registeredHomes = [];

hostRouter.post('/add-home', (req, res) => {
    console.log("In POST /add-home Middleware ", req.path, req.method, req.body.homeName);
    registeredHomes.push({ houseName: req.body.homeName });
    res.sendFile(path.join(rootDir, 'views', 'homeAdded.html'));
});

exports.hostRouter = hostRouter;
exports.registeredHomes = registeredHomes;