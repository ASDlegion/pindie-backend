// Создаём роут для запросов пользователей 
const usersRouter = require('express').Router();

// Импортируем вспомогательные функции
const { findAllUsers, createUser, findUserById, updateUser, deleteUser, checkEmptyUserFields, checkEmptyUserFieldsWOPassword, filterPassword, hashPassword } = require('../middlewares/users');
const { sendAllUsers, sendUserCreated, sendUserById, sendUserUpdated, sendUserDeleted, sendMe } = require('../controllers/users');
const { checkAuth } = require('../middlewares/auth');

// Обрабатываем GET-запрос с роутом '/users'
usersRouter.get('/users', findAllUsers, filterPassword, sendAllUsers);
usersRouter.get('/users/:id', findAllUsers, filterPassword, sendUserById);
usersRouter.get('/me', checkAuth, sendMe)

usersRouter.put('/users/:id', checkEmptyUserFieldsWOPassword, checkAuth, findUserById, updateUser, sendUserUpdated)

usersRouter.delete('/user/:id', checkAuth, deleteUser, sendUserDeleted)

usersRouter.post("/users", findAllUsers, checkEmptyUserFields, checkAuth, hashPassword, createUser, sendUserCreated); 

// Экспортируем роут для использования в приложении — app.js
module.exports = usersRouter;