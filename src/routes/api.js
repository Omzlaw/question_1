const express = require("express");
// Routers
const authRouter = require("./auth/auth.router");
const userRouter = require("./user/user.router");

const api = express.Router();

// Use Routers
api.use("/auth", authRouter);

// Use Routers
api.use("/app", userRouter);

module.exports = api;
