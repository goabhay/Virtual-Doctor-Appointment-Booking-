const express = require("express");
const {
  bookAppointment,
  assignDoctor,
  deleteAppointment,
  getAllAppointment,
} = require("../controllers/appointController");
const { isLoggedIn } = require("../middlewares/authentication");

const router = express.Router();

router.use(isLoggedIn);

router.route("/").post(bookAppointment).get(getAllAppointment);

router.route("/assignDoctor/:id").get(assignDoctor);
router.route("/:id").delete(deleteAppointment);

module.exports = router;
