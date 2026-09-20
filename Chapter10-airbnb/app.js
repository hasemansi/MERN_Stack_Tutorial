const express = require('express');
const userRouter = require('./routes/userRouter.js');
const hostRouter = require('./routes/hostRouter.js');

const app = express();

const PORT = 3000;

app.use(express.urlencoded());
app.use('/user',userRouter);
app.use('/host',hostRouter);

app.use((req, res, next) => {
    res.status(404).send("<h1>404 Not Found</h1>");
});

app.listen(PORT, () => {
    console.log(`Server is running on http://localhost:${PORT}`);
});
