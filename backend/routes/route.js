const { addTable, getTables, addRow, getRows } = require("../controllers/functions")

const router = require("express").Router()



router.post("/add-table", addTable)
      .post("/add-row", addRow)
      .get("/get-tables", getTables)
      .get("/get-rows", getRows)



module.exports = router