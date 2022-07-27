var express = require("express");
var router = express.Router();
const Login = require("../models/loginModel");


router.get("/login/:name", async function(req, res) {
  let name = req.params.name;
  let logins = await Login.getByName(name);


  let response = 'Failed';
  if(logins.length > 0){
    response = logins[0];
    response.accountType = "Cliente";
  }

  res.send(response);
});

module.exports = router;
