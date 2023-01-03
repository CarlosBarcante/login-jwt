require('dotenv').config();
const express = require('express');
const userRouter = require('./server/routes/user.js');
const app = express();

app.use(express.json());

app.use('/api/user', userRouter);

app.listen(process.env.PORT, () => { console.log('Server running...') });