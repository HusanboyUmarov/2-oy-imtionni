const { Router } = require("express");
const {getAll, getOne, add, del,put} = require("../controller/controller.Services");
const isAdmin = require("../middleware/isAdmin");

const router = Router()

const Io = require("../utils/Io")
const io = new Io(process.cwd()+"/database/services.json")


router.get("/ser/getAll",getAll)
router.get("/ser/getOne/:id",getOne)
router.post("/ser/add",isAdmin,add)
router.delete("/ser/del/:id",isAdmin,del)
router.put("/ser/put/:id",isAdmin,put)


module.exports = router;