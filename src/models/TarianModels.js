const mongoose = require("mongoose");

const tarianSchema = new mongoose.Schema(
  {
    videoId: {
      type: String,
      required: true
    },
    title: {
      type: String,
      required: true
    },
  },
  {
    timestamps: true
  }
);

const Tarian = mongoose.model("Tarian", tarianSchema);

module.exports = Tarian;
