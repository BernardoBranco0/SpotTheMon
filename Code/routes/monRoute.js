var express = require("express");
var router = express.Router();
const Mon = require("../models/monModel");

/* GET users listing. */
router.get("/", async function (req, res, next) {
  let mons = await Mon.select();
  res.send(mons);
});



router.get("/getByMon/:mons", async function (req, res, next) {
  let mons = await Mon.getByMon(req.params.mons);
  res.send(mons);
});

router.post("/", async function (req, res, next) {
  try {
    let mons = await Mon.create(req.body);
    res.send(mons);
  } catch (err) {
    res.status(400).send(err);
  }
});

router.put("/:id", async function (req, res, next) {
  console.log(req.body);
  let mon = await Mon.update(req.params.id, req.body);
  res.send(mon);
});

router.delete("/:id", async function (req, res, next) {
  let ride = await Ride.delete(req.params.id);
  res.send({ rowsAffected: ride });
});

module.exports = router;
