const { Router } = require("express");
const {getAll, getOne, add, del,put} = require("../controller/controller.Feedback");
const isAdmin = require("../middleware/isAdmin");

const router = Router()

const Io = require("../utils/Io")
const io = new Io(process.cwd()+"/database/services.json")


router.get("/feed/getAll",getAll)
router.get("/feed/getOne/:id",getOne)
router.post("/feed/add",isAdmin,add)
router.delete("/feed/del/:id",isAdmin,del)
router.put("/feed/put/:id",isAdmin,put)


module.exports = router;