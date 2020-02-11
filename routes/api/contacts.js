const router = require("express").Router();
const contactsController = require("../../controllers/contactsController");

router.route("/")
  .get(contactsController.findAll)
  .post(contactsController.create);

router
  .route("/:id")
  .get(contactsController.findById)
  .put(contactsController.update)
  .delete(contactsController.remove);

module.exports = router;