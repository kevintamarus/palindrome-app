import React, { Component } from 'react';
import { Consumers } from './contexts/index';

export default class Child extends Component {
  render() {
    return (
      <Consumers>
        {store => {
          const { players } = store.players.state;
          const { changePlayerNumber } = store.players.actions;
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