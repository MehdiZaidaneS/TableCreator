const moongose = require("mongoose")

const TableModel = new moongose.Schema({
    title:{
        type: String,
        required: true,
        trim: true,
        maxLength: 50
    },
    column1:{
        type: String,
        required: true,
        trim: true,
        maxLength: 50
    },
    columnData:{
        type: String,
        required: true,
        trim: true,
        maxLength: 50
    }
}, {timestamps: true})





module.exports = moongose.model("Table", TableModel)