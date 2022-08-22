const mongoose = require("mongoose");

const Schema = new mongoose.Schema(
  {
    price: {
      type: Number,
      required: [true, "Gimme an estimate💸"],
      minLength: [2, "Gimme some more💸"],
    },
    notes: {
      type: [],
      required: [true, "Talk to me...🔮"],
      minLength: [2, "Gimme more than two🔮"],
    },
    location: {
      type: [],
      required: [true, "Where in the world??? 🌍"],
      minLength: [2, "Gimme more than two 🌍"],
    },
    bucket: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "Bucket",
    },
    img:{
      type: String
    },
    creator: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "Creator",
    },
  },
  { timestamps: true }
);

module.exports = mongoose.model("Memory", Schema);
