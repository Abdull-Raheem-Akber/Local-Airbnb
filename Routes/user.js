const express = require("express");
const router = express.Router();
const User = require("../Models/User.js");
const WrapAsync = require("../utils/WrapAsync");
const passport = require("passport");
const { savedata } = require("../Middleware.js");
const UserController = require("../controllers/user.js");
// const  {IsLogin}  = require("../Middleware.js");

router
  .route("/signup")
  .get(UserController.RenderSingup)
  .post(WrapAsync(UserController.Signup));

router
  .route("/login")
  .get(UserController.RenderLogin)
  .post(
    savedata,
    passport.authenticate("local", {
      failureRedirect: "/login",
      failureFlash: true,
    }),
    UserController.Login
  );


router.get("/logout", UserController.Logout);

module.exports = router;
