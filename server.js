let express = require("express");
let config = require("./config");
let bodyParser = require("body-parser");
let question = require("./route/question.js");
let app = express();
let port = config.port;

app.use(
  bodyParser.urlencoded({
    extended: true
  })
);

app.use(bodyParser.json());

app.use("/question", question);

app.use(express.static(__dirname + "/www"));
app.get("/", express.static(__dirname + "/www", { index: "user.html" }));
//if cannot found respond 404 not found
app.use((req, res, next) => {
  console.log("next", next);
  res.status(404).json({
    error: "404 not found 1",
  });
});
//if there is any server internal error respond it
app.use(function (error, req, res, next) {
  console.log(error);
  res.status(500).json({
    error: "server internel error"
  });
});

app.listen(port, error => {
  error ? console.log("error!") : console.log("server Started! @_@");
});
