const gamesRouter = require("express").Router();

const { checkAuth } = require("../middlewares/auth.js");

const {
  findAllGames,
  findGameById,
  checkIsVoteRequest,
  createGame,
  updateGame,
  deleteGame,
  checkIsGameExists,
  checkIfCategoriesAvaliable,
  checkEmptyFields,
  checkIfUsersAreSafe,
} = require("../middlewares/games");

const {
  sendAllGames,
  sendGameById,
  sendGameCreated,
  sendGameUpdated,
  sendGameDeleted,
} = require("../controllers/games");

gamesRouter.get("/games", findAllGames, sendAllGames);

gamesRouter.post(
  "/games",
  findAllGames,
  checkIsGameExists,
  checkIfCategoriesAvaliable,
  checkEmptyFields,
  checkAuth,
  createGame,
  sendGameCreated
);

gamesRouter.get("/games/:id", findGameById, sendGameById);

gamesRouter.put(
  "/games/:id",
  findGameById,
  checkIsVoteRequest,
  updateGame,
  sendGameUpdated,
  checkIfUsersAreSafe,
  checkIfCategoriesAvaliable,
  checkEmptyFields,
  checkAuth
);

gamesRouter.delete("/games/:id", deleteGame, sendGameDeleted, checkAuth);

module.exports = gamesRouter;
