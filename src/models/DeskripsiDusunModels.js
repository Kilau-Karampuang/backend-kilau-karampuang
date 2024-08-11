const mongoose = require("mongoose");

const deskripsiDusunSchema = new mongoose.Schema(
  {
    dusun: {
      type: String,
      required: true
    },
    deskripsi: {
      type: String,
      required: true
    },
  },
);

const DeskripsiDusun = mongoose.model("DeskripsiDusun", deskripsiDusunSchema);

module.exports = DeskripsiDusun;
