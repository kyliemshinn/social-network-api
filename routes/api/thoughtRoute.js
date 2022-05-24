const router = require("express").Router();
//require all routes to be used in thought-controller file
const {
  getThoughts,
  addReaction,
  getThoughtById,
  createThought,
  deleteReaction,
  updateThought,
  deleteThought,
} = require("../../controllers/thoughtController");
//      api/ thoughts

//GET all thoughts, POST to create a new thought
router.route("/").get(getThoughts).post(createThought);

//GET a single thought by ID, PUT to update thought by ID, DELETE thought by ID
router
  .route("/:id")
  .get(getThoughtById)
  .put(updateThought)
  .delete(deleteThought);

//      /api/thoughts/:thoughtID/reactions

//POST to create a reaction, DELETE a reaction by reactions reactionID value
router.route("/:thoughtId/reactions").post(addReaction).delete(deleteReaction);

module.exports = router;
