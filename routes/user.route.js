const { Router } = require('express');
const { getAllUsers, getUserById, createUser, editUser, deleteUser, disabledUser } = require('../controllers/user.controller');
const route = Router();

route.get('/get-users', getAllUsers);

route.get('/get-user-by-id/:id', getUserById);

route.post('/create-user', createUser);

route.patch('/edit-user/:id', editUser);

route.patch('/disabled-user/:id', disabledUser)

route.delete('/delete-user/:id', deleteUser);

module.exports = route;
