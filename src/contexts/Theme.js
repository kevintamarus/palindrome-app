import React, { Component } from 'react';

const ThemeContext = React.createContext('light')

export class ThemeProvider extends Component {
  state = {theme: 'light'}
  render() {
    return (
      <ThemeContext.Provider value={{theme: this.state.theme}}>
        {this.props.children}
      </ThemeContext.Provider>
    )
  }
}

export const ThemeConsumer = ThemeContext.Consumer