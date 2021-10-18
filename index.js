const express = require("express");
const app = express();
const connection = require("./database/database");
const Gatos = require("./database/Gatos");

// Database
connection
    .authenticate()
    .then(() => {
        console.log("Conexão feita com o bancos de dados!");
    })
    .catch((msgErro) => {
        console.log(msgErro);
    });

app.set("view-engine", "ejs");
app.use(express.static("public"));

// Body parser
app.use(express.urlencoded({ extended: false }));
app.use(express.json());

//Rotas
app.get("/", (req, res) => {
    Gatos.findAll({ raw: true, order: [["id", "DESC"]] }).then(
        (gatos) => {
            res.render("index.ejs", {
                gatos,
            });
        },
    );
});

app.get("/sobre", (req, res) => {
    res.render('sobre.ejs', {nome: 'Felino'})
});

app.get("/info", (req, res) => {
    res.render("sobre.ejs");
});

app.listen(3000, () => console.log("App rodando!"));
