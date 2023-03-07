"use strict";

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.createTable("contract", {
      id: {
        type: Sequelize.INTEGER,
        autoIncrement: true,
        allowNull: false,
        primaryKey: true,
      },
      teamId: {
        type: Sequelize.INTEGER,
        references: { model: "teams", key: "id" },
        onUpdate: "CASCADE",
        onDelete: "CASCADE",
      },
      sponsorId: {
        type: Sequelize.INTEGER,
        references: { model: "sponsors", key: "id" },
        onUpdate: "CASCADE",
        onDelete: "CASCADE",
      },
      createdAt: { type: Sequelize.DATE },
      updatedAt: { type: Sequelize.DATE },
    });
  },

  async down(queryInterface, Sequelize) {
    await queryInterface.dropTable("contract");
  },
};
