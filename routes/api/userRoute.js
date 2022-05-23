const router = require("express").Router();

const {
  getUsers,
  getUserById,
  createUser,
  updateUser,
  deleteUser,
  addFriend,
  removeFriend,
} = require("../../controllers/userController");
//  api/user

//GET all users
//POST a new user
router.route("/").get(getUsers).post(createUser);

//GET a single user by ID
router.route("/:id").get(getUserById).put(updateUser).delete(deleteUser);

// POST to add a new friend to user friend list
//DELETE to remove friend
router.route("/:id/friends/:friendsId").post(addFriend).delete(removeFriend);

module.exports = router;
