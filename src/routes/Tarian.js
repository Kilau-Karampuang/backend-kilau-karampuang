const tarianRoutes = require("express").Router();

const {
  createTarian,
  getAllTarian,
  getTarianById,
  updateTarian,
  deleteTarian
} = require("../controllers/Tarian");

const { ensureAuthenticated } = require("../middlewares/Auth");

tarianRoutes.post("/", ensureAuthenticated, createTarian);
tarianRoutes.get("/", getAllTarian);
tarianRoutes.get("/:id", getTarianById);
tarianRoutes.put("/:id", ensureAuthenticated, updateTarian);
tarianRoutes.delete("/:id", ensureAuthenticated, deleteTarian);

module.exports = tarianRoutes;