const express = require("express");
const router = express.Router();

router.get("/", (req, res) => {
  res.render("home");
});

router.get("/historia", (req, res) => {
  res.render("pages/website/historia");
});

router.get("/kontakt", (req, res) => {
  res.render("pages/website/kontakt");
});

router.get("/kalender", (req, res) => {
  res.render("pages/website/kalender");
});

router.get("/akademia", (req, res) => {
  res.render("pages/website/akademia");
});

router.get("/maestro", (req, res) => {
  res.render("pages/website/maestro");
});

router.get("/teamKuido", (req, res) => {
  res.render("pages/website/teamKuido");
});

router.get("/amigunanSkol", (req, res) => {
  res.render("pages/website/amigunanSkol");
});


module.exports = router;