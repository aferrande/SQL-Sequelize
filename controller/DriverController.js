const Driver = require("../models/drivers");
const Team = require("../models/teams");

module.exports = {
  async store(req, res) {
    const { teamId } = req.params;
    const { name, number } = req.body;

    const team = await Team.findByPk(teamId);

    if (!team) {
      res.send("Team not found!");
    }

    const driver = await Driver.create({ name, number, teamId });
    return res.json(driver);
  },

  async index(req, res) {
    const { teamId } = req.params;

    if (!teamId) {
      res.send("Team not found!");
    }

    const team = await Team.findByPk(teamId, {
      include: Driver,
    });

    return res.json(team);
  },
};
