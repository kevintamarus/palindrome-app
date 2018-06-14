import React, { Component } from 'react';
import { Consumers } from './contexts/index';

class Child extends Component {
  componentDidMount() {
    console.log(this.props.store)
  }

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

export default props => (
  <Consumers>
    {store => <Child {...props} store={store} />}
  </Consumers>
)