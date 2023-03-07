const Team = require("../models/teams");
const Driver = require("../models/drivers");
const Sponsors = require("../models/sponsors");

Team.hasMany(Driver, { onDelete: "CASCADE", onUpdate: "CASCADE" });

Driver.belongsTo(Team, { foreignKey: "teamId", as: "teams" });

Sponsors.belongsToMany(Team, {
  foreignKey: "sponsorId",
  through: "contract",
  as: "teams",
});

Team.belongsToMany(Sponsors, {
  foreignKey: "teamId",
  through: "contract",
  as: "sponsors",
});

module.exports = { Team, Driver, Sponsors };
