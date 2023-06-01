// Schema

const mongoose = require ('mongoose')

const dailySchema = new mongoose.Schema({
    name: {
        type: String, 
        required: true
    }
})

module.exports = mongoose.model('List', dailySchema);