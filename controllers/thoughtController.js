//required models
const { User, Thought } = require("../models");

const thoughtControllers = {
  // get all thoughts
  getThoughts(req, res) {
    Thought.find({})
      .populate({
        path: "reactions",
        select: "-__v",
      })
      .select("-__v")
      .then((thoughtData) => res.json(thoughtData))
      .catch((err) => res.status(500).json(err));
  },

  //create a new thought
  createThought(req, res) {
    Thought.create(req.body)
      .then(({ _id }) => {
        return User.findOneAndUpdate(
          { _id: req.body.userId },
          { $push: { thoughts: _id } },
          { new: true }
        );
      })
      .then((thoughtData) => {
        if (!thoughtData) {
          res.status(404).json({ message: "No user found." });
          return;
        }
        res.json(thoughtData);
      })
      .catch((err) => res.status(500).json(err));
  },

  // get thought by ID
  getThoughtById(req, res) {
    Thought.findOne({ _id: req.params.id })
      .populate({
        path: "reactions",
        select: "-__v",
      })
      .select("-__v")
      .then((thoughtData) => {
        if (!thoughtData) {
          res.status(404).json({ message: "No thoughts found." });
          return;
        }
        res.json(thoughtData);
      })
      .catch((err) => res.status(500).json(err));
  },

  // update Thought by ID
  updateThought(req, res) {
    Thought.findOneAndUpdate(
      { _id: req.params.id },
      { $set: req.body },
      { runValidators: true, New: true }
    )
      .then((thoughtData) =>
        !thoughtData
          ? res.status(404).json({ message: "No thought found." })
          : res.json(user)
      )
      .catch((err) => res.status(500).json(err));
  },

  // delete thought by ID
  deleteThought(req, res) {
    Thought.findOneAndDelete({ _id: req.params.id })
      .then((thoughtData) => {
        if (!thoughtData) {
          res.status(404).json({ message: "No thought found." });
          return;
        }
        return User.findOneAndUpdate(
          { _id: req.params.userId },
          { $pull: { thoughts: req.params.Id } },
          { new: true }
        );
      })
      .then((userData) => {
        if (!userData) {
          res.status(404).json({ message: "No User found with ID" });
          return;
        }
        res.json(userData);
      })
      .catch((err) => res.status(500).json(err));
  },
  //create a new reaction at Thought- update at thought to add reaction
  addReaction(req, res) {
    Thought.findOneAndUpdate(
      { _id: req.params.thoughtId },
      { $addToSet: { reactions: req.body } },
      { new: true, runValidators: true }
    )
      .populate({ path: "reactions", select: "-__v" })
      .select("-__v")
      .then((thoughtData) => {
        if (!thoughtData) {
          res.status(404).json({ message: "No thoughts with this ID." });
          return;
        }
        res.json(thoughtData);
      })
      .catch((err) => res.status(400).json(err));
  },

  // deleteReaction(req, res) {
  //   Thought.findOneAndUpdate(
  //     { _id: req.params.id },
  //     { $pull: { reaction: { reactionId: req.params.reactionId } } },
  //     { runValidators: true, new: true }
  //   )
  //     .then((thoughtData) => {
  //       if (!thoughtData) {
  //         res.status(404).json({ message: "No thoughts with this ID." });
  //         return;
  //       }
  //       res.json(thoughtData);
  //     })
  //     .catch((err) => res.status(500).json(err));
  // },
  deleteReaction(req, res) {
    Thought.findOneAndUpdate(
        { _id: params.thoughtId },
        { $pull: { reactions: { reactionId: req.params.reactionId } } },
        { new: true }
    )
    .then(dbThoughtData => res.json(dbThoughtData))
    .catch(err => res.json(err));
},
};

module.exports = thoughtControllers;
