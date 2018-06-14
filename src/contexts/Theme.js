import React, { Component } from 'react';

const ThemeContext = React.createContext('light')

export class ThemeProvider extends Component {
  state = {theme: 'light'}
  render() {
    return (
      <ThemeContext.Provider value={{
        state: {
          theme: this.state.theme
        },
        actions: {}
      }}>
        {this.props.children}
      </ThemeContext.Provider>
    )
  }
}

export const ThemeConsumer = ThemeContext.Consumer