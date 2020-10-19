// TODO: write your code here
import GameSavingLoader from './gameSavingLoader';


GameSavingLoader.load().then((saving) => {
  console.log(saving);
}, (error) => {
  console.log(error.message);
});
