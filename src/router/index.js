const routerAdmin = require("./routerAdmin")
const routerFeedback = require("./routerFeedback")
const routerServices = require("./routerServices")
const routerContact = require("../router/router.Contact")
const mainRouter  = [
    routerAdmin,
    routerFeedback,
    routerServices,
    routerContact,
]

module.exports = mainRouter;
