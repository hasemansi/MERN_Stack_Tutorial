const express = require('express');
const userRouter = express.Router();
const path = require('path');
const rootDir = require('../utils/pathUtil');

userRouter.get('/', (req, res) => {
   res.sendFile(path.join(rootDir, 'views', 'home.html'));
});

module.exports = userRouter;