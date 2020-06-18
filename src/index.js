import express from 'express';
import path from 'path';
import cors from 'cors';
const mongoose = require('mongoose');
require('dotenv').config();
const app = express();
console.log(process.env.NODE_ENV);

if (process.env.NODE_ENV == 'production')
    app.use(cors({
        origin: 'https://whispering-sands-61340.herokuapp.com/'
    }));

app.use(express.static(path.join(__dirname, '/../client/build')));

app.get('/api', async (req, res) => {
    const msg = await process.env.HOST;
    console.log(process.env.HOST);
    SomeModel.create({ a_string: 'also_awesome' }, function (err, awesome_instance) {
        if (err) return handleError(err);
        // saved!
        console.log(awesome_instance);
        res.status(200).json(awesome_instance);

    });


});
app.get('/*', (req, res) => {
    res.sendFile(path.join(__dirname, '/../client/build', 'index.html'));
    // res.send('success booking church')
});
const connectDb = () => {
    return mongoose.connect(process.env.MONGODB_URI || process.env.DATABASE, {
        useNewUrlParser: true,
        useCreateIndex: true,
        useFindAndModify: false,
        useUnifiedTopology: true
    });
}
const SomeModelSchema = new mongoose.Schema({
    a_string: String,
    a_date: Date
});

// Compile model from schema
const SomeModel = mongoose.model('SomeModel', SomeModelSchema);

connectDb().then((response) => {
    app.listen(process.env.PORT || 3000, () => console.log("Listening to port 3000"));
});
