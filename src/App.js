import React, { Component } from 'react';
import Navbar from './components/Navbar/Navbar';
import Header from './components/Header/Header';
import Container from './components/Container/Container';
import PlayerCard from './components/PlayerCard/PlayerCard';
import players from './players.json';
import './App.css';

class App extends Component {
  state = {
    players,
    score: 0,
    topScore: 0,
    message: "Click an image to begin!"
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
        
      </div>
    );
  }
}

export default App;
