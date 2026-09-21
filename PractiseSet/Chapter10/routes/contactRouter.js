const express = require('express');
const contactRouter = express.Router();
const path = require('path');
const rootDir = require('../utils/pathUtil');

contactRouter.get('/contact-us', (req, res) => {
    console.log("In GET /contact-us Middleware ", req.path, req.method);
    res.sendFile(path.join(rootDir, 'views', 'contactUs.html'));
});

contactRouter.post('/contact-us', (req, res) => {
    console.log("In POST /contact-us Middleware ", req.path, req.method, req.body);
    res.sendFile(path.join(rootDir, 'views', 'contactRes.html'));
});
    
module.exports = contactRouter;