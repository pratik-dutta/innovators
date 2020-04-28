const express = require("express");
const passport = require("passport");
const router = express.Router();

const userController = require("../controllers/user_controller");

//signin page
router.get("/signin", userController.signIn);

//signin the user
router.post("/createsession", passport.authenticate(
    "local",
    {failureRedirect: "/users/signin"},

),userController.createSession);

//sign up manually
router.post("/create", userController.createUser);

router.get("/resetpassword", userController.resetPassword);

//create new user page
router.get("/createnew", userController.createNew);

router.get("/myfeeds", userController.myFeeds);

router.get("/signout", userController.signOut);

module.exports = router;