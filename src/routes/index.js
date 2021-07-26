const express = require("express");
const router = express.Router();

router.get("/", (req, res) => {
  res.render("home");
});
router.get("/login", (req, res) => {
  res.render("auth/login", { layout: false });
});
router.get("/register", (req, res) => {
  res.render("auth/register", { layout: false });
});
router.get("/loginMaestro", (req, res) => {
  res.render("auth/loginMaestro", { layout: false });
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
router.get("/bonam", (req, res) => {
  res.render("pages/skolnan/bonam");
});
router.get("/bonamHist", (req, res) => {
  res.render("pages/skolnan/bonamHistoria");
});
router.get("/koralspecht", (req, res) => {
  res.render("pages/skolnan/koralspecht");
});
router.get("/koralHistoria", (req, res) => {
  res.render("pages/skolnan/koralHistoria");
});
router.get("/mahuma", (req, res) => {
  res.render("pages/skolnan/mahuma");
});
router.get("/mahumaHistoria", (req, res) => {
  res.render("pages/skolnan/mahumaHistoria");
});


module.exports = router;