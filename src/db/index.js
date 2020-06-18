const mongoose = require('mongoose');
// const Confession = require('./models/confession');
// const Holymass = require('./models/holyMass');
const ChurchMember = require('./models/churchMember');
// const Phase = require('./models/phase');
const connectDb = require('./config');

exports = { ChurchMember, connectDb };
