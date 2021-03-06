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
router.get("/succesful", (req, res) => {
  res.render("pages/skolnan/succesful", { layout: false });
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

// portal
router.get("/admin-home", (req, res) => {
  res.render("pages/portal/admin/admin-home", { layout: false });
});
router.get("/admin-maestro", (req, res) => {
  res.render("pages/portal/admin/admin-maestro", { layout: false });
});
router.get("/admin-studiante", (req, res) => {
  res.render("pages/portal/admin/admin-studiante", { layout: false });
});
router.get("/admin-klas", (req, res) => {
  res.render("pages/portal/admin/admin-klas", { layout: false });
});

router.get("/admin-mIndividual", (req, res) => {
  res.render("pages/portal/admin/admin-mIndividual", { layout: false });
});


router.get("/maestro-home", (req, res) => {
  res.render("pages/portal/teacher/maestro-home", { layout: false });
});
router.get("/maestro-studiante", (req, res) => {
  res.render("pages/portal/teacher/maestro-studiante", { layout: false });
});
router.get("/maestro-stuIndivPunt", (req, res) => {
  res.render("pages/portal/teacher/maestro-stuIndivPunt", { layout: false });
});
router.get("/maestro-infoStudiante", (req, res) => {
  res.render("pages/portal/teacher/maestro-infoStudiante", { layout: false });
});
router.get("/student-home", (req, res) => {
  res.render("pages/portal/student/student-home", { layout: false });
});

module.exports = router;