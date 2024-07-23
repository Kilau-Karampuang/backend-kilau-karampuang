const mongoose = require("mongoose");

const beritaSchema = new mongoose.Schema(
  {
    judul: {
      type: String,
      required: true
    },
    deskripsi: {
      type: String,
      required: true
    }
  },
  {
    timestamps: true
  }
);

const Berita = mongoose.model("Berita", beritaSchema);

module.exports = Berita;
