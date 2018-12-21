import React, { Component } from 'react';
import Navbar from './components/Navbar/Navbar';
import Header from './components/Header/Header';
import Container from './components/Container/Container';
import PlayerCard from './components/PlayerCard/PlayerCard';
import Footer from './components/Footer/Footer';
import players from './players.json';
import './App.css';

class App extends Component {
  //setting this.state
  state = {
    players,
    score: 0,
    topScore: 0,
    message: "Click an image to begin!"
  };

  handleClick = id => {
    console.log(`${id} clicked`);
    //Filter the this.state.players to return the player that matches the id clicked
    const playerClicked = this.state.players.filter(player => player.id === id);
    console.log(playerClicked);
    //If player card has not been clicked yet, change clicked value to true. Then run handleIncrement.
    if (playerClicked[0].clicked === false) {
      playerClicked[0].clicked = true;
      console.log(playerClicked);
      //increases score by 1 pt, updates state and checks for win
      this.handleIncrement()
    } 
    else {
      //updates state for loss, shuffles player cards and resets game
      this.setState({
        message: "YOU LOST! Click any image to start over.",
        score: 0
      })
      this.resetGame(this.state.players);
      this.shufflePlayers(this.state.players);
    };
  };

  handleIncrement =() => {
    //destructure score and top score
    const { score, topScore } = this.state;
    //increment score
    const newScore = score + 1;
    //if newScore is > topScore, reset topScore to the newScore, otherwise leave topScore as is.
    const newTopScore = newScore > topScore ? newScore : topScore;
    //updating state with new info
    this.setState({
      score: newScore,
      topScore: newTopScore,
      message: "You guessed correctly...Keep clicking!"
    });
    console.log(this.state.score)
    //if newScore = 12 then player wins
    if (newScore === 12) {
      //update state with winning message and reset score
      this.setState({
        message: "YOU WON!! Click any image to start over.",
        score: 0
      });
      this.resetGame(this.state.players)
    };
    //shuffle cards
    this.shufflePlayers(this.state.players);
  };

  //Durstenfeld shuffle algorithm
  shufflePlayers = players => {
    for (let i = players.length - 1; i > 0; i--) {
      const j = Math.floor(Math.random() * (i + 1));
      [players[i], players[j]] = [players[j], players[i]];
  }
  }

  resetGame = players => {
    //update state; map over players array and set clicked values back to false
    this.setState({
      score: 0,
      players: players.map(player => ({...player, clicked: false}))
    });
  }



  render() {
    return (
      <div className="App">

        <Navbar 
          score={this.state.score}
          topScore={this.state.topScore}
          message={this.state.message}
          />

        <Header />

        <Container>
          {this.state.players.map(player => (
            <PlayerCard
            id={player.id}
            key={player.id}
            name={player.name}
            image={player.image}
            handleClick={this.handleClick}
            />
          ))}
        </Container>

        <Footer />

      </div>
    );
  }
}

export default App;
