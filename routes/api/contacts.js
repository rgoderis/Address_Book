const router = require("express").Router();
const contactsController = require("../../controllers/contactsController");

// Matches with "/api/books"
router.route("/")
  .get(contactsController.findAll)
  .post(contactsController.create);

// Matches with "/api/books/:id"
router
  .route("/:id")
  .get(contactsController.findById)
  .put(contactsController.update)
  .delete(contactsController.remove);

router
  .route("/:id/note")
  .post(contactsController.addNote)
router
  .route("/:contactId/note/:noteId")
  .delete(contactsController.deleteNote)
router
.route("/:option/:input")
.get(contactsController.searchContacts)
module.exports = router;