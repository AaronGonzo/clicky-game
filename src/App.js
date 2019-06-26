import React from "react";
import PlayerCard from "./components/PlayerCard/index";
import Wrapper from "./components/Wrapper";
import players from "./players.json";
import "./App.css";

class App extends React.Component {
  state = {
    players
  };

  removeFriend = id => {
    const players = this.state.players.filter(player => player.id !== id);
    this.setState({ players });
  };

  render() {
    return (
      <Wrapper>
        <h1 className="title">Player List</h1>
        {this.state.players.map(players => (
          <PlayerCard
            removeFriend={this.removeFriend}
            id={players.id}
            name={players.name}
            image={players.image}
            occupation={players.occupation}
            location={players.location}
          />
        ))}
      </Wrapper>
    );
  }
}
export default App;
