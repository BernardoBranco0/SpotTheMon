var express = require("express");
var cors = require("cors");
var path = require("path");
var cookieParser = require("cookie-parser");
var logger = require("morgan");
const connection = require("./models/connection");
var indexRouter = require("./routes/index");
var usersRouter = require('./routes/users');
var clienteRouter = require("./routes/clienteRoute");
var monRouter = require("./routes/monRoute");
var loginRouter = require("./routes/loginRoute");
var grupoRouter = require("./routes/grupoRoute");
var imageRouter = require("./routes/imageRoute");

var app = express();
app.use(cors());

app.use(logger("dev"));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, "public")));

app.use("/", indexRouter);
app.use("/API/clientes", clienteRouter);
app.use("/api/mons", monRouter);
app.use("/api/logins", loginRouter);
app.use("/api/grupos", grupoRouter);
app.use("/api/images", imageRouter);
app.use('/users', usersRouter);
module.exports = app;