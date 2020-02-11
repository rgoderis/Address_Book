const router = require("express").Router();
const contactRoutes = require("./contacts");
const path = require("path");

// contacts routes
router.use("/contacts", contactRoutes);
// For anything else, render the html page
// router.use(function(req, res) {
//     res.sendFile(path.join(__dirname, "../../client/build/index.html"));
//   });

module.exports = router;