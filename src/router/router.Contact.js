const { Router } = require("express");
const {sendContact, getAll, getOne} = require("../controller/controller.Contact");
const isAdmin = require("../middleware/isAdmin");
const router = Router()

router.post("/contact/add",sendContact )
router.get("/contact/getAll",isAdmin,getAll )
router.get("/contact/getOne/:id",isAdmin,getOne )

module.exports = router;