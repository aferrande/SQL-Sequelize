const Team = require("../models/teams");

module.exports = {
  async store(req, res) {
    const { name, engineSupplier } = req.body;

    const team = await Team.create({ name, engineSupplier });
    return res.json(team);
  },

  async index(req, res) {
    const team = await Team.findAll();
    return res.json(team);
  },

  async put(req, res) {
    const { name, engineSupplier } = req.body;
    await Team.update(
      { name, engineSupplier },
      { where: { id: req.params.id } }
    );
    return res.send("Success updating team!");
  },

  async delete(req, res) {
    await Team.destroy({
      where: { id: req.params.id },
    });
    return res.send("Team deleted!");
  },
};
