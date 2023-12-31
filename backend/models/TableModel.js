const moongose = require("mongoose")

const TableModel = new moongose.Schema({
    tableName:{
        type: String,
        required: true,
        trim: true,
        maxLength: 50
    },
    tableHeading1:{
        type: String,
        required: true,
        trim: true,
        maxLength: 50
    },
    tableHeading2:{
        type: String,
        required: true,
        trim: true,
        maxLength: 50
    },
    tableHeading3:{
        type: String,
        required: false,
        trim: true,
        maxLength: 50
    },
    tableHeading4:{
        type: String,
        required: false,
        trim: true,
        maxLength: 50
    }

}, {timestamps: true})





module.exports = moongose.model("Table", TableModel)