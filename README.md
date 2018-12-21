# FCB ClickGame
FCB Click Game is a F&uacute;tbol Club Barcelona themed memory game built using React ([Create React App](https://github.com/facebook/create-react-app)).  The objective of the game is to click each of the 12 player images only once. Each time the user clicks an image the score will increase by 1 point. If the user clicks any image twice, the game will reset and the score will return to 0. Access the deployed app [here]().


## How it Works

The game starts once the first player image has been clicked. Each player in the players.json file has a key named "clicked" which, by default, is set to a value of false. Once clicked, that player's clicked value is set to true and the score is incremented by 1 point. The object of the game is to click every player only once. If the user clicks a player image with a value of true, all clicked values will be reset to false, the score will return to 0 and the user will have to start over. The game is won once all 12 player's clicked values are set to true.

## Preview

![ClickGame-GIF](/public/assets/images/FCB-ClickGame.gif)

## Built With

* HTML
* CSS
* [Bootstrap](https://getbootstrap.com/)
* [Javascript](https://www.javascript.com/)
* [React](https://reactjs.org/)
