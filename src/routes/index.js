const express = require("express");
const router = express.Router();

router.get("/", (req, res) => {
  res.render("home");
});

router.get("/historia", (req, res) => {
  res.render("pages/historia");
});

router.get("/kontakt", (req, res) => {
  res.render("pages/kontakt");
});

router.get("/kalender", (req, res) => {
  res.render("pages/kalender");
});

router.get("/akademia", (req, res) => {
  res.render("pages/akademia");
});

router.get("/maestro", (req, res) => {
  res.render("pages/maestro");
});

router.get("/teamKuido", (req, res) => {
  res.render("pages/teamKuido");
});


module.exports = router;