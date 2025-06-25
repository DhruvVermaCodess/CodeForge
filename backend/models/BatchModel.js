const mongoose = require('mongoose')

const batchSchema = new mongoose.Schema({
    batchName: {
        type: String,
        required: true
    },
    description: {
        type: String,
        required: true
    },
    notesFolders: [{type: String}]
})

module.exports = mongoose.model('Batch', batchSchema);


