const Mem = require("../models/mem.model");
const Bucket = require("../models/bucket.model");
const User = require("../models/user.model");
const jwt = require("jsonwebtoken");
// get secret ket from .env
require('dotenv').config()
const SECRET = process.env.SECRET

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
    console.log('getting memories by user', req.params.id)
    Mem.find({creator : req.params.id})
      .then(e=> res.json(e))
      .catch(e=> {console.log("ERROR IN get by user", err);
            res.status(400).json({
              message: "something went wrong in find all mems",
              error: err,
            }) })

  },
  getMemsByBucket: (req, res) => {
    Mem.find({ bucket: req.params.id})
    .then( e => res.json(e) )
      .catch((err) => {
        console.log("ERROR IN Get all", err);
        res.status(400).json({
          message: "something went wrong in find all mems",
          error: err,
        });
      })
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
    console.log(req.body)
    // const user = jwt.verify(req.cookies.userToken, SECRET);
    Mem.create(req.body)
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
        console.log("ERROR IN CREATE", err);
        res.status(400).json({
          message: "something went wrong in create",
          errors: err.errors,
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
