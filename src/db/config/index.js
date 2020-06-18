const mongoose = require('mongoose');
require('dotenv').config({ path: 'sample.env' })

const connectDb = () => {
    return mongoose.connect(
        process.env.MONGOLAB_URI ||
        process.env.MONGOHQ_URL || process.env.DATABASE, {
        useNewUrlParser: true,
        useCreateIndex: true,
        useFindAndModify: false,
        useUnifiedTopology: true
    });
}
exports = connectDb;
