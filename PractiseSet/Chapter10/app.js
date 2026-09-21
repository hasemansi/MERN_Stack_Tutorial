const express = require('express');
const path = require('path');
const rootDir = require('./utils/pathUtil');
const contactRouter = require('./routes/contactRouter');
const userRouter = require('./routes/userRouter');
const app = express();

app.use(express.urlencoded());
app.use('/', userRouter);
app.use('/api', contactRouter);

const PORT = 3000;

app.use((req, res, next) => {
    res.status(404).sendFile(path.join(rootDir, 'views', '404.html'));
});

app.listen(PORT, () => {
    console.log(`Server is running on http://localhost:${PORT}`);
});
