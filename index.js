const express = require("express");
const app = express();
const connection = require("./database/database");

const gatosController = require("./gatos/GatosController")
const Gatos = require("./gatos/Gatos")

// View engine
app.set("view engine", "ejs");

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

app.use("/", gatosController)

app.listen(3000, () => {
    console.log("O servidor está rodando!");
});
