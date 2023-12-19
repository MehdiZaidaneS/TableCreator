const { addTable, getTables, addRow, getRows, deleteTable, deleteRow, editeRow, deleteTableRow} = require("../controllers/functions")

const router = require("express").Router()



router.post("/add-table", addTable)
      .post("/add-row", addRow)
      .get("/get-tables", getTables)
      .get("/get-rows", getRows)
      .delete("/delete-table/:id", deleteTable)
      .delete("/delete-row/:id", deleteRow)
      .post("/update-row", editeRow)
      .post("/delete-table-row", deleteTableRow)



module.exports = router