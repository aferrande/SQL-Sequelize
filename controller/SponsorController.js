const Sponsors = require("../models/sponsors");
const Team = require("../models/teams");

module.exports = {
  async store(req, res) {
    const { teamId } = req.params;
    const { name } = req.body;
    const team = await Team.findByPk(teamId);

    const [sponsor] = await Sponsors.findOrCreate({
      where: { name },
    });

    await team.addSponsor(sponsor);
    return res.json(sponsor);
  },

  async index(req, res) {
    //change "teamId" to "sponsorId" here and on routes, and "team" for "sponsors" so we get which teams are sponsored by a specific sponsor.
    const { teamId } = req.params;

    const team = await Team.findByPk(teamId, {
      include: { association: "sponsors" },
    });

    return res.json(team);
  },

  async delete(req, res) {
    await Team.destroy({
      where: { id: req.params.id },
    });
    return res.send("Team deleted!");
  },
};
