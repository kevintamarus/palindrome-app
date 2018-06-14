import React, { Component } from 'react';
import { PlayersProvider, PlayersConsumer } from './Players';
import { ThemeProvider, ThemeConsumer } from './Theme';

export function Providers({children}) {
  return (
    <PlayersProvider>
      <ThemeProvider>
        {children}
      </ThemeProvider>
    </PlayersProvider>
  )
}

export function Consumers({children}) {
  return (
    <PlayersConsumer>
      {players => (
        <ThemeConsumer>
          {theme => children({players, theme})}
        </ThemeConsumer>
      )}
    </PlayersConsumer>
  )
}