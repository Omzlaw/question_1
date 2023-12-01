const {
    httpLogin,
    httpRegister,
  } = require("./auth.controller");

const { Router } = require("express");

const authRouter = Router();

// Login
authRouter.post("/login", httpLogin);
// Register
authRouter.post("/register", httpRegister);

module.exports = authRouter;