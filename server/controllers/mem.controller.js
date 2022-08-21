const Mem = require("../models/mem.model");
const User = require("../models/user.model");
const jwt = require("jsonwebtoken");

module.exports = {
  getMems: (req, res) => {
    Mem.find({})
      .populate("createdBy", "userName email")
      .then((mems) => {
        res.json(mems);
      })
      .catch((err) => {
        console.log("ERROR IN GET ALL", err);
        res.status(400).json({
          message: "something went wrong in find all mems",
          error: err,
        });
      });
  },
  getMemsByUser: (req, res) => {
    User.findOne({ userName: req.params.userName }).then((user) => {
      Mem.find({ createdBy: user._id })
        .populate("createdBy", "userName email")
        .then((mems) => {
          res.json(mems);
        })
        .catch((err) => {
          console.log("ERROR IN Get all", err);
          res.status(400).json({
            message: "something went wrong in find all mems",
            error: err,
          });
        })
        .catch((err) => {
          console.log("ERROR IN Get all", err);
          res.status(400).json({
            message: "something went wrong in find all mems",
            error: err,
          });
        });
    });
  },
  getMemById: (req, res) => {
    Mem.findOne({ _id: req.params.id })
      .then((mem) => {
        res.json(mem);
      })
      .catch((err) => {
        console.log("ERROR IN GET ONE", err);
        res.status(400).json({
          message: "something went wrong in findById",
          error: err,
        });
      });
  },
  createMem: (req, res) => {
    const user = jwt.verify(req.cookies.userToken, SECRET);
    Mem.create({ ...req.body, createdBy: user._id })
      .then((newMem) => {
        res.status(201).json(newMem);
      })
      .catch((err) => {
        console.log("ERROR IN CREATE", err);
        res.status(400).json({
          message: "something went wrong in create",
          errors: err.errors,
        });
      });
  },
  updateMem: (req, res) => {
    Mem.findOneAndUpdate({ _id: req.params.id }, req.body, {
      new: true,
      runValidators: true,
    })
      .then((mem) => {
        res.json(mem);
      })
      .catch((err) => {
        console.log("ERROR IN UPDATE", err);
        res.status(400).json({
          message: "something went wrong in update",
          error: err,
        });
      });
  },
  deleteMem: (req, res) => {
    Mem.deleteOne({ _id: req.params.id })
      .then((mem) => {
        res.json(mem);
      })
      .catch((err) => {
        console.log("ERROR IN DELETE MEM", err);
        res.status(400).json({
          message: "something went wrong in delete",
          error: err,
        });
      });
  },
};
