import React, { Component } from 'react';
import { Consumers } from './contexts/index';

class Child extends Component {
  componentDidMount() {
    this.props.store.players.actions.changePlayerNumber(200);
  }

  render() {
    const { players } = this.props.store.players.state;
    const { changePlayerNumber } = this.props.store.players.actions;
    return (
      <div>
        <input value={players} onChange={e => changePlayerNumber(e.target.value)}/>
        There are {players} players right now
      </div>
    )
  }
}

export default props => (
  <Consumers>
    {store => <Child {...props} store={store} />}
  </Consumers>
)