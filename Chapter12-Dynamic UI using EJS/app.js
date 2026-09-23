const express = require('express');
const userRouter = require('./routes/userRouter');
const hostRouter = require('./routes/hostRouter');
const path = require('path');
const rootDir = require('./utils/pathUtil');

const app = express();

const PORT = 3000;

app.use(express.urlencoded());
app.use('/',userRouter);
app.use('/host',hostRouter);

app.set('view engine', 'ejs');
app.set('views', 'views');

app.use(express.static(path.join(rootDir, 'public')));

app.use((req, res, next) => {
    res.status(404).sendFile(path.join(rootDir, 'views', '404.html'));
});

app.listen(PORT, () => {
    console.log(`Server is running on http://localhost:${PORT}`);
});
