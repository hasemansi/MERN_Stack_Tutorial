const express = require('express');
const userRouter = express.Router();
const path = require('path');
const rootDir = require('../utils/pathUtil');

userRouter.get('/', (req, res) => {
    console.log("In GET /contact-us Middleware ", req.path, req.method);
    res.sendFile(path.join(rootDir, 'views', 'home.html'));
});

module.exports = userRouter;