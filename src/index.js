const express = require("express");
const morgan = require("morgan");
const cors = require("cors");
const exphbs = require("express-handlebars");
const path = require("path");
const http = require("http");
const https = require("https");
const bodyParser = require("body-parser");
const nodemailer = require("nodemailer");
  
const app = express();

app.set("views", path.join(__dirname, "views"));

const hbs = exphbs.create({
  defaultLayout: "main",
  layoutsDir: path.join(app.get("views"), "layouts"),
  partialsDir: path.join(app.get("views"), "partials"),
  extname: ".hbs",
  helpers: {
    ifeq: function (a, b, options) {
      if (a == b) {
        return options.fn(this);
      }
      return options.inverse(this);
    },
    ifnoteq: function (a, b, options) {
      if (a != b) {
        return options.fn(this);
      }
      return options.inverse(this);
    },
    firstL: function (options) {
      return options.charAt(0);
    },
  },
});

app.engine(".hbs", hbs.engine);
app.set("view engine", ".hbs");

// Middleware
app.use(morgan("tiny")); //Morgan
app.use(cors()); // cors
app.use(express.json()); // JSON
app.use(express.urlencoded({ extended: false })); //urlencoded


//send Email
app.post("/preguntaEmail", (req, res) => {
  const { nombre, tel, email, message } = req.body;

  let transporter = nodemailer.createTransport({
    service: "gmail",
    auth: {
      user: "adventschoolbestuur@gmail.com",
      pass: "Advent2020",
    },
  });

  let mailOption = {
    from: email,
    to: `adventschoolbestuur@gmail.com`,
    subject: "Pregunta mayornan",
    html:
      "<h2>Pregunta</h2><h5>di: " +
      nombre +
      "</h5><h5>Email: " +
      email +
      "</h5><h5>Telefon: " +
      tel +
      "</h5><h5>Mensage: "+
      message ,
  };

  transporter.sendMail(mailOption, function (err, data) {
    if (err) {
      data.json({ status: "404", data: err });
    } else {
      console.log("Email sent");
      data.json({ status: "202", data: "E pregunta a wordu manda" });
    }
  });
});

// Routes
app.use(require("./routes"));
app.use(express.static(path.join(__dirname, "public")));

const server = http.createServer(app);
app.set("port", process.env.PORT || 4002);

server.listen(app.get("port"), () => {
  console.log("server on port", app.get("port"));
});