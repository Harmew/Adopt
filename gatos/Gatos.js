const Sequelize = require("sequelize");
const connection = require("../database/database");

const Gatos = connection.define("gatos", {
    name: {
        type: Sequelize.STRING,
        allowNull: false,
    },
    age: {
        type: Sequelize.FLOAT,
        allowNull: false,
    },
    weight: {
        type: Sequelize.FLOAT,
        allowNull: false
    },
    sex: {
        type: Sequelize.TEXT,
        allowNull: false
    },
    castrated: {
        type: Sequelize.BOOLEAN,
        allowNull: false
    },    
    deficient: {
        type: Sequelize.BOOLEAN,
        allowNull: false
    },
    description: {
        type: Sequelize.TEXT,
        allowNull: false,
    },
    tel: {
        type: Sequelize.FLOAT,
        allowNull: false
    },
    email: {
        type: Sequelize.STRING,
        allowNull: false
    },
    url: {
        type: Sequelize.STRING,
        allowNull: false,
    },
});

Gatos.sync({force: false})

module.exports = Gatos;
