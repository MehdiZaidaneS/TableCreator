const TableModel = require("../models/TableModel")
const RowModel = require("../models/RowModel")




exports.addTable = async(req, res) =>{
      
    const {tableName, tableHeading1, tableHeading2, tableHeading3, tableHeading4} = req.body;
    const newTable = TableModel({
        tableName,
        tableHeading1,
        tableHeading2,
        tableHeading3,
        tableHeading4
    })
    try {
        if(!tableName || !tableHeading1 || !tableHeading2){
            return res.status(400).json({message: "All field required"})
        }
        await newTable.save()
        res.status(200).json({message: "Data saved in database!"})
    } catch (error) {
        res.status(500).json({message: "Couldnt save the data!"})
        console.log("error")
    }
    RowModel.db.createCollection(tableName,{capped : true, size : 9232768})
    console.log(newTable)

    console.log("Collection created")
}

exports.addRow = async(req, res) =>{
    const {rowName, tableData1, tableData2, tableData3, tableData4} = req.body;
    const newRow = RowModel({
        rowName,
        tableData1,
        tableData2,
        tableData3,
        tableData4
    })

    
     try {
         if(!rowName || !tableData1 || !tableData2){
             return res.status(400).json({message: "All field required"})
         }
         await newRow.save()
         res.status(200).json({message: "Data saved in database!"})
     } catch (error) {
         res.status(500).json({message: "Couldnt save the data!"})
         console.log("error")
     }
     console.log(newRow)
    
    const nameOfCollection = TableModel.db.collection(rowName);
    
    nameOfCollection.insertOne(
        {
            rowName,
            tableData1,
            tableData2,
            tableData3,
            tableData4
        }
      )
}




exports.getTables = async(req, res) =>{
      
    try {
        const tables = await TableModel.find()
        res.status(200).json(tables)
    } catch (error) {
        res.status(500).json({message: "Couldnt get the data!"})
    }

}


exports.getRows = async(req, res) =>{
      
    try {
        const rows = await RowModel.find()
        res.status(200).json(rows)
    } catch (error) {
        res.status(500).json({message: "Couldnt get the data!"})
    }

}


exports.deleteTable = async(req, res) =>{

    const {id} = req.params;

    TableModel.findByIdAndDelete(id)
    .then((table)=>{
         res.status(200).json({message: "Table Deleted"})
    })
    .catch((error)=>{
        res.status(500).json({message: "Couldnt Deleted"})
    })

}


exports.deleteRow = async(req, res) =>{
    const {id} = req.params;

    RowModel.findByIdAndDelete(id)
    .then((row)=>{
         res.status(200).json({message: "Row Deleted"})
    })
    .catch((error)=>{
        res.status(500).json({message: "Couldnt Deleted"})
    })

    
}