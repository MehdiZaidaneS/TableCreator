const moongose = require("mongoose")

const RowModel = new moongose.Schema({
    rowName:{
        type: String,
        required: true,
        trim: true,
        maxLength: 50
    },
    tableData1:{
        type: String,
        required: true,
        trim: true,
        maxLength: 50
    },
    tableData2:{
        type: String,
        required: true,
        trim: true,
        maxLength: 50
    },
    tableData3:{
        type: String,
        required: false,
        trim: true,
        maxLength: 50
    },
    tableData4:{
        type: String,
        required: false,
        trim: true,
        maxLength: 50
    }

}, {timestamps: true})





module.exports = moongose.model("Row", RowModel)