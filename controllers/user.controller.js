const { obtenerTodosLosUsuarios, obtenerUsuarioPorId, crearUsuario, editarUsuario, eliminarUsuario } = require('../services/user.service');

const getAllUsers = async(req, res) => {
  try {
    const resp = await obtenerTodosLosUsuarios();
    if (resp.length === 0) {
      return res.status(404).json('No hay usuarios en la base de datos.');
    }
    res.status(200).json(resp);
  } catch (error) {
    res.status(500).json(error.message);
  }
};

const getUserById = async(req, res) => {
  try {
    const { id } = req.params;
    const resp = await obtenerUsuarioPorId(id);
    if (!resp) {
      return res.status(404).json('Usuario no encontrado.');
    }
    res.status(200).json(resp);
  } catch (error) {
    res.status(500).json(error.message);
  }
};

const createUser = async(req, res) => {
  try {
    const userData = req.body;
    const resp = await crearUsuario(userData);
    res.status(201).json(resp);
  } catch (error) {
    res.status(500).json(error.message);
  }
};

const editUser = async(req, res) => {
  try {
    const { id } = req.params;
    const userData = req.body;
    const resp = await editarUsuario(id, userData);
    if (!resp) {
      return res.status(404).json('Usuario no encontrado.');
    }
    res.status(200).json(resp);
  } catch (error) {
    res.status(500).json(error.message);
  }
};

const disabledUser = async (req, res) => {
  try {
    const { id } = req.params;
    const disabled = true;
    const resp = await editarUsuario(id, {disabled});
    if (!resp) {
      return res.status(404).json('Usuario no encontrado.');
    }
    res.status(200).json(resp);
  } catch (error) {
    res.status(500).json(error.message);
  }
};

const deleteUser = async(req, res) => {
  try {
    const { id } = req.params;
    const resp = await eliminarUsuario(id)
    if (!resp) {
      return res.status(404).json('Usuario no encontrado.');
    }
    res.status(200).json(resp);
  } catch (error) {
    res.status(500).json(error.message);
  }
};

module.exports = {
  getAllUsers,
  getUserById,
  createUser,
  editUser,
  deleteUser,
  disabledUser
};
