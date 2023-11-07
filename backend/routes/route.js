const { addTable, getTables } = require("../controllers/functions")

const router = require("express").Router()



router.post("/add-table", addTable)
      .get("/get-tables", getTables)



module.exports = router