const TableModel = require("../models/TableModel")


exports.addTable = async(req, res) =>{
      
    const {title, column1, columnData} = req.body;
    
    const newTable = TableModel({
        title,
        column1,
        columnData
    })

    try {
        if(!title || !column1 || !columnData){
            return res.status(400).json({message: "All field required"})
        }
        await newTable.save()
        res.status(200).json({message: "Data saved in database!"})
    } catch (error) {
        res.status(500).json({message: "Couldnt save the data!"})
        console.log("error")
    }

    console.log(newTable)

}

exports.getTables = async(req, res) =>{
      
    try {
        const tables = await TableModel.find()
        res.status(200).json(tables)
    } catch (error) {
        res.status(500).json({message: "Couldnt save the data!"})
    }

}