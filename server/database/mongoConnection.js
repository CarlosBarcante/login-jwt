const mongoose = require('mongoose');

mongoose.set('strictQuery', true);

mongoose.connect(process.env.MONGO_CONNECTION_URL, (err) => {
    if (err) console.log(err.message);
    else console.log('Mongo Connected...');
})