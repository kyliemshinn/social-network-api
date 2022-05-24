//require User model
const { User } = require("../models");

const userControllers = {
  //get all users
  getUsers(req, res) {
    User.find({})
      .populate({
        path: "thoughts",
        select: "-__v",
      })
      .select("-__v")
      .then((userData) => res.json(userData))
      .catch((err) => res.status(500).json(err));
  },

  //create new user
  createUser(req, res) {
    User.create(req.body)
      .then((userData) => res.json(userData))
      .catch((err) => res.status(400).json(err));
  },

  // get user by ID
  getUserById(req, res) {
    User.findOne({ _id: req.params.id })
      .populate({
        path: "thoughts",
        select: "-__v",
      })
      .select("-__v")
      .then((userData) => {
        if (!userData) {
          res.status(404).json({ message: "No user found." });
          return;
        }
        res.json(userData);
      })
      .catch((err) => res.status(500).json(err));
  },

  // update user by ID
  updateUser(req, res) {
    User.findOneAndUpdate(
      { _id: req.params.id }, 
      req.body, 
      {new: true, runValidators: true,})
      .then((userData) => {
        if (!userData) {
          res.status(404).json({ message: "No user found by ID." });
          return;
        }
        res.json(dbUserData);
      })
      .catch((err) => res.status(400).json(err));
  },

  // delete user by ID
  deleteUser(req, res) {
    User.findOneAndDelete({ _id: req.params.id })
      .then((userData) => {
        if (!userData) {
          res.status(404).json({ message: "No user found." });
          return;
        }
        res.json(userData);
      })
      .catch((err) => res.status(400).json(err));
  },

  /*ADD AND DELETE FRIENDS*/

  // add a friend
  addFriend(req, res) {
    User.findOneAndUpdate(
      { _id: req.params.id },
      { $addToSet: { friends: req.params.friendsId } },
      { new: true }
    )
      .then((userData) => res.json(userData))
      .catch((err) => res.status(400).json(err));
  },

  //delete a friend
  removeFriend(req, res) {
    User.findOneAndUpdate(
      { _id: req.params.id },
      { $pull: { friends: req.params.friendsId } },
      { new: true }
    )
      .then((userData) => {
        if (!userData) {
          res.status(404).json({ message: "no user found." });
          return;
        }
        res.json(userData);
      })
      .catch((err) => res.status(400).json(err));
  },
};

module.exports = userControllers;
