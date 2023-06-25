const { createUserService } = require("../services/user/createUser.service");
const { listUserService } = require("../services/user/listUser.service");
const { updateUserService } = require("../services/user/updateUser.service");
const { deleteUserService } = require("../services/user/deleteUser.service");
const { retriveUserService } = require("../services/user/retriveUser.service");

const createUserController = async (req, res) => {
  const { name, email, password, phone_number } = req.body;

  const newUser = await createUserService({
    name,
    email,
    password,
    phone_number,
  });

  return res.status(201).json(newUser);
};

const listUserController = async (req, res) => {
  const users = await listUserService();
  return res.json(users);
};

const updateUserController = async (req, res) => {
  const userData = req.body;
  const userId = req.params.id;

  const updatedUser = await updateUserService(userData, userId);

  return res.json(updatedUser);
};

const deleteUserController = async (req, res) => {
  const idUser = req.params.id;

  await deleteUserService(idUser);

  return res.status(204).send();
};

const retriveUserController = async (req, res) => {
  const userId = req.user.id;

  const user = await retriveUserService(userId);

  return res.json(user);
};

module.exports = {
  createUserController,
  listUserController,
  updateUserController,
  deleteUserController,
  retriveUserController,
};
