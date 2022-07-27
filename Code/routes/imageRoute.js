var express = require("express");
var router = express.Router();
const Img = require("../models/imageModel");


router.post("/", async function (req, res, next) {
    try {
      let imgs = await Img.create(req.body);
      res.send(imgs);
    } catch (err) {
      res.status(400).send(err);
    }
  });




module.exports = router;