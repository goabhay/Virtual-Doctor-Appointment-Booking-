const mongoose = require("mongoose");
const bcrypt = require("bcrypt");
const jwt = require("jsonwebtoken");
const SECRET = "asidfwqoiedfsoiweqknsdkfoijqwekfojei";

const userSchema = new mongoose.Schema(
  {
    name: {
      type: String,
      required: true,
    },
    email: {
      type: String,
      required: true,
    },
    password: {
      type: String,
      required: true,
    },
    avtar: {
      type: String,
    },
    speciality: {
      type: String,
    },
    role: {
      type: String,
      enum: ["user", "patient", "doctor"],
      default: "patient",
    },
  },
  {
    timestamps: true,
  }
);

userSchema.pre("save", async function (next) {
  try {
    const salt = await bcrypt.genSalt(10);
    this.password = await bcrypt.hash(this.password, salt);
    if (this.role == "patient") this.speciality = undefined;

    next();
  } catch (error) {
    next(error);
  }
});

userSchema.methods.createToken = function () {
  const token = jwt.sign({ _id: this._id }, SECRET, { expiresIn: "1h" });
  return token;
};

userSchema.methods.checkPassword = async function (password) {
  return await bcrypt.compare(password, this.password);
};

module.exports = mongoose.model("User", userSchema);
