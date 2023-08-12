const { Router } = require("express");
const router = Router()


const checkAdmin = require("../controller/controller.Admin");

router.post("/admin", checkAdmin)

module.exports = router;