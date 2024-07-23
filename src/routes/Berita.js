const beritaRoutes = require("express").Router();

const {
  createBerita,
  getAllBerita,
  getBeritaById,
  updateBerita,
  deleteBerita
} = require("../controllers/Berita");

beritaRoutes.post("/", createBerita);
beritaRoutes.get("/", getAllBerita);
beritaRoutes.get("/:id", getBeritaById);
beritaRoutes.put("/:id", updateBerita);
beritaRoutes.delete("/:id", deleteBerita);

module.exports = beritaRoutes;