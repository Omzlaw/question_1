require("dotenv").config();
const jwt = require("jsonwebtoken");

const privateKey = process.env.PRIVATE_KEY;

const createAccessToken = (userId) => {
  try {
    return jwt.sign({ userId }, privateKey, {
      expiresIn: 86400000,
    });
  } catch (error) {
    console.log(error);
  }
};

const verifyToken = (token) => {
  try {
    return jwt.verify(token, publicKey);
  } catch (error) {
    console.log(error);
    return false;
  }
};


module.exports = {
    createAccessToken,
    verifyToken,
  };