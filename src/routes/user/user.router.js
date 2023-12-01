const {
    httpGetAllUsers
  } = require("./user.controller");

const { Router } = require("express");

const userRouter = Router();

// GET USERS
userRouter.post("/users", httpGetAllUsers);

module.exports = userRouter;