const beritaRoutes = require("express").Router();

const {
  createBerita,
  getAllBerita,
  getBeritaById,
  updateBerita,
  deleteBerita
} = require("../controllers/Berita");

const { ensureAuthenticated } = require("../middlewares/Auth");

beritaRoutes.post("/", ensureAuthenticated, createBerita);
beritaRoutes.get("/", getAllBerita);
beritaRoutes.get("/:id", getBeritaById);
beritaRoutes.put("/:id", ensureAuthenticated, updateBerita);
beritaRoutes.delete("/:id", ensureAuthenticated, deleteBerita);

module.exports = beritaRoutes;