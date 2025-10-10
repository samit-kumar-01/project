const express = require("express");
const router = express.Router();
const wrapAsync = require("../utils/wrapAsync.js");
let User = require("../models/user.js");
const passport = require("passport");
const { redirecturl } = require("../middleware.js");
const userController=require("../controller/user.js")
router
   .route("/signup")
   .get(userController.renderSignUpForm )
   .post(wrapAsync(userController.signUp));

router
    .route("/login")
    .get(userController.renderLogInForm)
    .post(redirecturl, passport.authenticate("local", { failureRedirect: "/login", failureFlash: true }),userController.login)


router.get("/logout", userController.logout)
module.exports = router;