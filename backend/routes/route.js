const { addTable } = require("../controllers/functions")

const router = require("express").Router()



router.post("/add-table", addTable)



module.exports = router