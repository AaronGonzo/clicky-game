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
    clicked: [],
    score: 0
  };

  //Click a player card so the player is taken out of the players array
  imageClicked = playerId => {
    const hasClicked = this.state.clicked.indexOf(playerId) > -1;

    // The cards will be rearranged using the sort method and if you click a player that has been selected then you will lose and it resets
    if (hasClicked) {
      this.setState({
        players: this.state.players.sort(function(_x, y) {
          return 0.5 - Math.random();
        }),
        clicked: [],
        score: 0
      });
      alert("You Lose!");
    } else {
      const score = this.state.score + 1;
      this.setState({
        players: this.state.players.sort(function(x, y) {
          return 0.5 - Math.random();
        }),
        clicked: this.state.clicked.concat(playerId),
        score
      });

      if (score === 12) {
        alert("You Win!");
        this.setState({
          players: this.state.players.sort(function(x, y) {
            return 0.5 - Math.random();
          }),
          clicked: [],
          score: 0
        });
      }
    }
  };

  render() {
    return (
      <div>
        <Header score={this.state.score} />
        <Jumbotron />
        <div className="container">
          <Wrapper>
            {this.state.players.map(players => (
              <PlayerCard
                key={players.id}
                id={players.id}
                imageClick={() => this.imageClicked(players.id)}
                image={players.image}
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
