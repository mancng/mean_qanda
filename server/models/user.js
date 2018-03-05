var mongoose = require('mongoose');

//Define User Schema
var UserSchema = new mongoose.Schema({
    name: { type: String, required: true, unique: true, minlength: 3 }
});

//Set models by passing them their respective Schemas
mongoose.model('User', UserSchema);