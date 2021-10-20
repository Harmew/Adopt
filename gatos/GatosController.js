const express = require("express");
const router = express.Router();
const Gatos = require("./Gatos");
const path = require("path");
const adminAuth = require("../middlewares/adminAuth");

// Multer
const multer = require("multer");
const storage = multer.diskStorage({
    destination: (req, file, cb) => {
        cb(null, path.join(__dirname + "../../public/images"));
    },
    filename: (req, file, cb) => {
        console.log(file);
        cb(null, Date.now() + path.extname(file.originalname));
    },
});

const upload = multer({ storage: storage });

// Rota para Adicionar os Gatos (ADMIN)
router.get("/admin/gatos/new", adminAuth, (req, res) => {
    res.render("./admin/gatos/new");
});

// Salva os Gatos
router.post("/gatos/save", upload.single("image"), (req, res) => {
    const name = req.body.name;
    const age = req.body.age;
    const weight = req.body.weight;
    const sex = req.body.sex;
    const castrated = req.body.castrated;
    const deficient = req.body.deficient;
    const description = req.body.description;
    const tel = req.body.tel;
    const email = req.body.email;
    const url = req.file.filename;

    if (
        (name != undefined,
        age != undefined,
        weight != undefined,
        sex != undefined,
        castrated != undefined,
        deficient != undefined,
        description != undefined,
        tel != undefined,
        email != undefined,
        url != undefined)
    ) {
        Gatos.create({
            name: name,
            age: age,
            weight: weight,
            sex: sex,
            castrated: castrated,
            deficient: deficient,
            description: description,
            tel: tel,
            email: email,
            url: url,
        })
            .then(() => {
                res.redirect("/admin/gatos");
            })
            .catch((err) => {
                console.log(err);
            });
    } else {
        res.redirect("/admin/gatos/new");
    }
});

// Rota para Controlar os Gatos
router.get("/admin/gatos", adminAuth, (req, res) => {
    Gatos.findAll().then((cats) => {
        res.render("admin/gatos/index", { cats: cats });
    });
});

router.post("/gatos/delete", (req, res) => {
    const id = req.body.id;
    if (id != undefined) {
        if (!isNaN(id)) {
            Gatos.destroy({
                where: {
                    id: id,
                },
            }).then(() => {
                res.redirect("/admin/gatos");
            });
        } else {
            res.redirect("/admin/gatos");
        }
    } else {
        res.redirect("/admin/gatos");
    }
});

router.get("/admin/gatos/show/:id", adminAuth, (req, res) => {
    const id = req.params.id;

    if (isNaN(id)) {
        res.redirect("/admin/gatos");
    }

    Gatos.findByPk(id)
        .then((cat) => {
            if (cat != undefined) {
                res.render("admin/gatos/show", { cat: cat });
            } else {
                res.redirect("/admin/gatos");
            }
        })
        .catch((erro) => {
            res.redirect("/admin/gatos");
        });
});

router.get("/gatos/:id", (req, res) => {
    const id = req.params.id;

    if (isNaN(id)) {
        res.redirect("/");
    }

    Gatos.findByPk(id)
        .then((cat) => {
            if (cat != undefined) {
                res.render("gato", { cat: cat });
            } else {
                res.redirect("/");
            }
        })
        .catch((erro) => {
            res.redirect("/");
        });
});

router.get("/", (req, res) => {
    Gatos.findAll().then((cats) => {
        res.render("index", { cats: cats });
    });
});

module.exports = router;
