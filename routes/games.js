// Файл routes/games.js

const gamesRouter = require('express').Router();

const { findAllGames, createGame, findGameById, updateGame, deleteGame, checkEmptyFields, checkIfUsersAreSafe, checkIfCategoriesAvaliable, checkIsGameExists, checkIsVoteRequest } = require('../middlewares/games');
const { sendAllGames, sendGameCreated, sendGameById, sendGameUpdated, sendGameDeleted } = require('../controllers/games');
const { checkAuth } = require('../middlewares/auth')

gamesRouter.get('/games', findAllGames, sendAllGames);
gamesRouter.get('/games/:id', findGameById, sendGameById);

gamesRouter.put('/games/:id', findGameById, checkIsVoteRequest, checkIsGameExists, checkAuth, checkIfUsersAreSafe, checkIfCategoriesAvaliable, checkEmptyFields, updateGame, sendGameUpdated)

gamesRouter.delete('/games/:id', checkAuth, deleteGame, sendGameDeleted)

gamesRouter.post('/games', findAllGames, checkIsGameExists, checkAuth, checkIfCategoriesAvaliable, checkEmptyFields, createGame, sendGameCreated);

module.exports = gamesRouter;
