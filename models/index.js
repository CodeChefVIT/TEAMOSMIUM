const mongoose = require('mongoose');
const dbpath = 'mongodb://localhost/rinManthan'
mongoose.connect(dbpath,{ useNewUrlParser: true })
    .then(() => console.log('--------------- Database Online ---------------'));

// ============================================================================

module.exports.User = require('./model_user');
