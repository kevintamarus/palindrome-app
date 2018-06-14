import React, { Component } from 'react';
import { Consumers } from './util';

export default class Child extends Component {
  render() {
    return (
      <Consumers>
        {value => {
          const {players, changePlayerNumber} = value.players;
          return (
            <div>
              <input value={players} onChange={e => changePlayerNumber(e.target.value)}/>
              There are {players} players right now
            </div>
          )
        }}
      </Consumers>
    )
  }
}