require('dotenv').config();
const express = require('express');
const routes = require('./server/routes');
const app = express();

app.use(express.json());

app.get('/api', routes);

app.listen(process.env.PORT, () => { console.log('Server running...') });