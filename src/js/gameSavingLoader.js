import read from './reader';
import json from './parser';

export default class GameSavingLoader {
  /* type GameSaving = {
      "id": number, // id сохранения
      "created": timestamp, // timestamp создания
      "userInfo": {
        "id": number, // user id
        "name": string, // user name
        "level": number, // user level
        "points": number // user points
      }
    }; */

  static load() {
    return read()
      .then(json)
      .then((data) => JSON.parse(data));
  }
}
