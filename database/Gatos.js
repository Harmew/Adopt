const Sequelize = require("sequelize");
const connection = require("./database");

const Gatos = connection.define("gatos", {
    nome: {
        type: Sequelize.STRING,
        allowNull: false,
    }
});

Gatos.sync({ force: false })

module.exports = Gatos;
