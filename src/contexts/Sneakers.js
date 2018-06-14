import React, { Component } from 'react';

const SneakersContext = React.createContext()

export class SneakersProvider extends Component {
  state = {brand: 'adidas'}
  render() {
    return (
      <SneakersContext.Provider value={{
        state: {
          brand: this.state.brand
        },
        actions: {}
      }}>
        {this.props.children}
      </SneakersContext.Provider>
    )
  }
}

export const SneakersConsumer = SneakersContext.Consumer