import { UserService } from "../services/index.js";

const userService = new UserService();

const createuser = async (req, res) => {
  try {
    const userData = req.body; // You need to define how user data is expected in the request

    // Use the UserService (or any other method) to create a user
    const newUser = await userService.create({
      email: userData.email,
      password: userData.password,
      name: userData.name,
    });

    return res.status(201).json({
      data: newUser,
      message: "SignUp SuccessFull",
      err: {},
    });
  } catch (error) {
    return res.status(500).json({
      data: "no user created",
      message: "An error occurred while creating the user",
      error: { error },
    });
  }
};

const loginUser = async (req, res) => {
  try {
    const response = await userService.login(req.body);
    return res.status(201).json({
      data: response,
      message: "SignIn SuccessFull",
      err: {},
    });
  } catch (error) {
    return res.status(500).json({
      data: "Check your email of pwd",
      message: error.message,
      error: { error },
    });
  }
};

export { createuser, loginUser };
