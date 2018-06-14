import React from 'react';
import { PlayersProvider, PlayersConsumer } from './Players';
import { SneakersProvider, SneakersConsumer } from './Sneakers';
import { ThemeProvider, ThemeConsumer } from './Theme';

export function Providers({children}) {
  return (
    <SneakersProvider>
      <PlayersProvider>
        <ThemeProvider>
          {children}
        </ThemeProvider>
      </PlayersProvider>
    </SneakersProvider>
  )
}

export function Consumers({children}) {
  return (
    <SneakersConsumer>
      {sneakers => (
        <PlayersConsumer>
          {players => (
            <ThemeConsumer>
              {themes => children({
                players,
                sneakers,
                themes,
              })}
            </ThemeConsumer>
          )}
        </PlayersConsumer>
      )}
    </SneakersConsumer>
  )
}