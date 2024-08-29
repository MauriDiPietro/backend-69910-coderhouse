import * as userService from "../services/user.service.js";

export const createUser = async (req, res, next) => {
  try {
    const { cant } = req.query;
    const response = await userService.createUsersMock(cant);
    res.status(200).json(response);
  } catch (error) {
    next(error);
  }
};

export const getUsers = async (req, res, next) => {
  try {
    const response = await userService.getUsers();
    res.json(response);
  } catch (error) {
    next(error);
  }
};
