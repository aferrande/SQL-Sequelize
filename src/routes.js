const express = require("express");
const routes = express.Router();
const TeamsController = require("../controller/TeamsController");
const DriverController = require("../controller/DriverController");
const SponsorController = require("../controller/SponsorController");

routes.post("/teams/:teamId", TeamsController.store);
routes.get("/teams", TeamsController.index);
routes.put("/teams/:id", TeamsController.put);
routes.delete("/teams/:id", TeamsController.delete);

routes.post("/teams/:teamId/drivers", DriverController.store);
routes.get("/teams/:teamId/drivers", DriverController.index);

routes.post("/team/:teamId/sponsors", SponsorController.store);
routes.get("/team/:teamId/sponsors", SponsorController.index);
routes.delete("/teams/:teamId/:id/sponsors", SponsorController.delete);

module.exports = routes;
