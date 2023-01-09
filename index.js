require('dotenv').config();
require('./server/database/mongoConnection');
const express = require('express');
const userRouter = require('./server/routes/user');
const app = express();

app.use(express.json());

app.use('/api', userRouter);

app.listen(process.env.PORT, () => { console.log('Server running...') });