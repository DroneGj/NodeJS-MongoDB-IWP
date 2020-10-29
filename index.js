require("./models/db");
const express = require("express");
const path = require("path");
const handlebars = require("handlebars");
const exphbs = require("express-handlebars");
const {
  allowInsecurePrototypeAccess,
} = require("@handlebars/allow-prototype-access");
const bodyparser = require("body-parser");

const studentController = require("./controllers/studentController");

const app = express();
const port = 3636;

app.use(bodyparser.urlencoded({ extended: false }));
app.use(bodyparser.json());

app.get("/", (req, res) => {
  res.send(`
  <h2>Welcome to Students Database</h2>
  <h3>Enter the <a href="/student/list">Database</a></h3>
  `)
})

app.set("views", path.join(__dirname, "/views/"));

app.engine(
  "hbs",
  exphbs({
    handlebars: allowInsecurePrototypeAccess(handlebars),
    extname: "hbs",
    defaultLayout: "MainLayout",
    layoutsDir: __dirname + "/views/layouts",
  })
);

app.set("view engine", "hbs");

// app.use(express.static("public"))
// app.get("/", (req, res) => {
//   res.render("index")
// })

app.listen(port, () => {
  console.log(`Example app listening at http://localhost:${port}`);
});

app.use("/student", studentController);
