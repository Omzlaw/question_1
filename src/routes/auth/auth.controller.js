const { createAccessToken } = require("../../utils/jwt");


// Simulating a user database
const userDatabase = [
  {
    id: "1",
    username: "omeizaalabi@gmail.com",
    password: "sdjewmomew",
  },
];

const httpLogin = async (req, res) => {
  // Validation
  const username = req.body.username;
  const password = req.body.password;

  if (!username || !password) {
    return res.status(400).json({
      message: "Your username and password is required",
      success: false,
    });
  }

  try {
    const user = userDatabase.find((user) => user.username === username);
    if (!user) {
      return res.json({
        message: "Not found",
        success: false,
      });
    }

    // Ideally comparison should be done with the hashed value of (req.password)
    if (user.password != password) {
      return res.json({
        message: "Password incorrect",
        success: false,
      });
    }

    const token = createAccessToken(user.id);
    return res.status(200).json({
      message: "Success",
      success: true,
      data: { user: user, token: { data: token } },
    });

  } catch (error) {
    return res.json({
      message: "An error occured",
      success: false,
    });
  }
};

const httpRegister = async (req, res) => {
  const username = req.body.username;
  const password = req.body.password;
  // Validation
  if (!username || !password) {
    return res.status(400).json({
      message: "Your username and password is required",
      success: false,
    });
  }

  try {
    const newUser = {
      id: userDatabase.length + 1,
      username: username,
      password: password, // Assuming the password is hashed
    };

    if (!newUser) {
      return res.json({
        message: "Registration failed",
        success: false,
      });
    }

    userDatabase.push(newUser);

    const token = createAccessToken(newUser.id);

    return res.status(200).json({
      message: "Success",
      success: true,
      data: { newUser, token: { data: token } },
    });
  } catch (error) {
    return res.json({
      message: "An error occured",
      success: false,
    });
  }
};

module.exports = {
  httpLogin,
  httpRegister,
  userDatabase
};
