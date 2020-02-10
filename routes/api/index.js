const router = require("express").Router();
const contactRoute = require("./contact");

// contacts routes
router.use("/contact", contactRoute);

module.exports = router;