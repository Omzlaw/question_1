const { userDatabase } = require("../auth/auth.controller");
const { verifyToken } = require("../../utils/jwt");

const httpGetAllUsers = async (req, res) => {
  // Get token value to the json body
  const token = req.body.token;

  if (!token) {
    return res.status(404).json({
      message: "Not authenticated",
      success: false,
    });
  }

  try {
    const decode = verifyToken(token);
  } catch (error) {
    return res.status(404).json({
      message: "Not authenticated",
      success: false,
    });
  }

  try {
    const users = userDatabase;
    if (!users) {
      return res.status(404).json({
        message: "Not found",
        success: false,
      });
    }
    return res.status(200).json({
      message: "Success",
      success: true,
      data: users,
    });
  } catch (error) {
    return res.json({
      message: "An error occured",
      success: false,
    });
  }
};

module.exports = {
    httpGetAllUsers
}