require('dotenv').config();
require('./server/database/mongoConnection');
const express = require('express');
const routes = require('./server/routes/index');
const app = express();

app.use(express.json());

app.use('/api', routes);

app.listen(process.env.PORT, () => { console.log('Server running...') });