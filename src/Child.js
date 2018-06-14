import React, { Component } from 'react';
import { PlayersConsumer } from './Players';

export default class Child extends Component {
  render() {
    return (
      <PlayersConsumer>
        {value => {
          const {players, changePlayerNumber} = value;
          return (
            <div>
              <input value={players} onChange={e => changePlayerNumber(e.target.value)}/>
              There are {players} players right now
            </div>
          )
        }}
      </PlayersConsumer>
    )
  }
}