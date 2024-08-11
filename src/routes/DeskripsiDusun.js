const deskripsiDusunRoutes = require("express").Router();

const {
  createDeskripsiDusun,
  getAllDeskripsiDusun,
  getDeskripsiDusunById,
  updateDeskripsiDusun,
  deleteDeskripsiDusun
} = require("../controllers/DeskripsiDusun");

const { ensureAuthenticated } = require("../middlewares/Auth");

deskripsiDusunRoutes.post("/", ensureAuthenticated, createDeskripsiDusun);
deskripsiDusunRoutes.get("/", getAllDeskripsiDusun);
deskripsiDusunRoutes.get("/:id", getDeskripsiDusunById);
deskripsiDusunRoutes.put("/:id", ensureAuthenticated, updateDeskripsiDusun);
deskripsiDusunRoutes.delete("/:id", ensureAuthenticated, deleteDeskripsiDusun);

module.exports = deskripsiDusunRoutes;
