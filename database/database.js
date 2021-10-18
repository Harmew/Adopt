const Sequelize = require("sequelize");

const connection = new Sequelize("adopt", "root", "Ad071103", {
    host: "localhost",
    dialect: "mysql",
});

module.exports = connection;
