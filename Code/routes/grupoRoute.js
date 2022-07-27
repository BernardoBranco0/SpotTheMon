var express = require("express");
var router = express.Router();
const Grupo = require("../models/grupoModel");



router.get("/getByMember/:grupos", async function (req, res, next) {
    let grupos = await Grupo.getByMember(req.params.grupos);
    res.send(grupos);
  });


router.get("/getByNotMember/:grupos", async function (req, res, next) {
    let grupos = await Grupo.getByNotMember(req.params.grupos);
    res.send(grupos);
  });


  router.get("/getByImage/:image", async function (req, res, next) {
    let image = await Grupo.getByImage(req.params.image);
    res.send(image);
  });

router.post("/", async function (req, res, next) {
    try {
      let members = await Grupo.create(req.body);
      res.send(members);
    } catch (err) {
      res.status(400).send(err);
    }
  });


module.exports = router;