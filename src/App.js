import React from "react";
import PlayerCard from "./components/PlayerCard/index";
import Wrapper from "./components/Wrapper";
import players from "./players.json";
import Jumbotron from "./components/Jumbotron/index";
import Header from "./components/Header/Header";
import "react-sticky-header/styles.css";
import Footer from "./components/Footer/Footer";
import "./App.css";

class App extends React.Component {
  state = {
    players,
    score: 0,
    highscore: 0
  };

  endGame = () => {
    if (this.state.score > this.state.highScore) {
      this.setState({ highscore: this.state.score }, function() {
        console.log(this.sate.highscore);
      });
    }
    this.state.players.forEach(player => {
      player.count = 0;
    });
  };

  render() {
    return (
      <div>
        <Header />
        <Jumbotron />
        <div className="container">
          <Wrapper>
            {this.state.players.map(players => (
              <PlayerCard
                id={players.id}
                name={players.name}
                image={players.image}
                occupation={players.occupation}
                location={players.location}
              />
            ))}
          </Wrapper>
        </div>
        <Footer />
      </div>
    );
  }
}
export default App;
