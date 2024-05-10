const express = require("express");
const {
  getUsers,
  getUser,
  signup,
  login,
  logout,
  deleteUser,
} = require("../controllers/userController");

const upload = require("../middlewares/multer");

const { isLoggedIn } = require("../middlewares/authentication");

const router = express.Router();

router.route("/").get((req, res) => {
  res.send("welcome on server side");
});

router.route("/getUsers").get(getUsers);

router.route("/signup").post(upload.single("avtar"), signup);

router.route("/login").post(login);
router.route("/logout").get(logout);

router.use(isLoggedIn);

router.route("/getUser/:id").get(getUser).delete(deleteUser);

module.exports = router;
