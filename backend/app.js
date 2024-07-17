const express = require("express");
const app = express();
const mongoose = require("mongoose");
const cookieParser = require("cookie-parser");
const cors = require("cors");

// configuration
app.use(
  cors({
    origin: "http://localhost:3000",
    credentials: true,
  })
);
app.use(cookieParser());
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

// routers
const userRouter = require("./routers/userRouter");
const appointRouter = require("./routers/appointRouter");
const categoryRouter = require("./routers/categoryRouter");

app.use("/user", userRouter);
app.use("/appointment", appointRouter);
app.use("/category", categoryRouter);

// database
mongoose.connect("mongodb://localhost:27017/miniProject");

app.listen(4000, () => {
  console.log("server running on port 4000");
});
