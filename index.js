const express = require("express");
const app = express();
const session = require("express-session");
const bodyParser = require("body-parser");
const connection = require("./database/database");

const gatosController = require("./gatos/GatosController");
const usersController = require("./users/UsersController");

const Gatos = require("./gatos/Gatos");
const User = require("./users/User");

// View engine
app.set("view engine", "ejs");

// Sessions
app.use(
    session({
        secret: "adopt",
        cookie: { maxAge: 300000000 },
    }),
);

// Static
app.use(express.static("public"));

// Body Parser
app.use(express.urlencoded({ extended: false }));
app.unsubscribe(express.json());

// Database
connection
    .authenticate()
    .then(() => console.log("Conexão feita com sucesso!"))
    .catch((error) => console.log(error));

app.use("/", gatosController);
app.use("/", usersController);

app.use("/sobre", (req, res) => {
    res.render("sobre");
});

app.listen(3000, () => {
    console.log("O servidor está rodando!");
});
