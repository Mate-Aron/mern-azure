const mongoose = require('mongoose');

const teamSchema = new mongoose.Schema({
    name:String,
    votes:Number,
    cIndex:Number
});
module.exports = mongoose.model("Focicsapatok", teamSchema, "Focicsapatok");