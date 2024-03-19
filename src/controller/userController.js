import {
  deleteUser,
  detailUser,
  getAllUsers,
  postUser,
  updateUser,
} from "../models/users.js";
import { CreateUserValidator, UpdateUserValidator } from "../validator/UserValidator.js";
import 'dotenv/config'

const getAllUserController = async (req, res) => {
  try {
    const data = await getAllUsers();
    data.map((d) => {
      if (d.image) {
        d.image = `${process.env.BE_URL}/assets/${d.image}`
      }
    })
    res.json({
      message: "Get All users...",
      data: data,
    });
  } catch (error) {
    res.status(500).json({
      message: "failed to get all users",
      error,
    });
  }
};

const postUserController = async (req, res) => {
  const { body, file } = req;
  console.log(file);
  try {
    await CreateUserValidator.validateAsync(body)
    const data = await postUser(body, file.filename);
    res.status(201).json({
      message: "Created user",
      data: {
        ...body,
        image: file.filename
      },
    });
  } catch (error) {
    res.status(400).json({
      message: "failed post users",
      error: error.message,
    });
  }
};

const getDetailUserController = async (req, res) => {
  const { id } = req.params;
  const data = await detailUser(id);
  try {
    res.json({
      message: "Get detail users successfully",
      data,
    });
  } catch (error) {
    res.status(500).json({
      message: "failed get detail users",
      error,
    });
  }
};

const updateUserController = async (req, res) => {
  const { id } = req.params;
  const { body } = req;
  try {
    await UpdateUserValidator.validateAsync(body)
    const data = await updateUser(id, body);
    res.json({
      message: "update successful",
      data: {
        id,
        ...body,
      },
    });
  } catch (error) {
    res.status(500).json({
      message: "failed update users",
      error,
    });
  }
};

const deleteUserController = async (req, res) => {
  try {
    const { id } = req.params;
    const data = await deleteUser(id);
    res.json({
      message: "Delete users successfully",
      data: null,
    });
  } catch (error) {
    res.status(500).json({
      message: "failed delete users",
      error,
    });
  }
};

export {
  getAllUserController,
  postUserController,
  deleteUserController,
  getDetailUserController,
  updateUserController,
};
