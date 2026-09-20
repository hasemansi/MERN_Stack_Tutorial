const express = require('express');
const userRouter = express.Router();
const path = require('path');

userRouter.use(express.urlencoded());
userRouter.get('/', (req, res) => {
   res.sendFile(path.join(__dirname + '../','views','home.html'));
});

module.exports = userRouter;