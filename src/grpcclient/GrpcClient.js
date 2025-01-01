import { GameServiceClient } from "../proto/game_grpc_web_pb";
import {
  CreateGameRequest,
  CreateGameResponse,
  JoinGameRequest,
  JoinGameResponse,
} from "../proto/game_pb";

const client = new GameServiceClient("http://localhost:8080");

export const createGame = (userName) => {
  const createGameRequest = new CreateGameRequest();
  createGameRequest.setPlayerName(userName);

  return new Promise((resolve, reject) => {
    client.createGame(createGameRequest, {}, (error, response) => {
      if (error) {
        reject(error);
      } else {
        console.log(response.toObject());
        resolve(response.toObject());
      }
    });
  });
};

export const joinGame = (gameId, userName) => {
  const joinGameRequest = new JoinGameRequest();

  joinGameRequest.setGameId(gameId);
  joinGameRequest.setPlayerName(userName);

  return new Promise((resolve, reject) => {
    client.joinGame(joinGameRequest, {}, (error, response) => {
      if (error) {
        reject(error);
      } else {
        console.log(response.toObject());
        resolve(response.toObject());
      }
    });
  });
};
