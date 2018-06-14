import React, { Component } from 'react';
import './App.css';
import Child from './Child';

import { Providers } from './contexts/index';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      input: '',
      isPalindrome: null,
    }
  }

  handleInput = event => {
    const input = event.target.value;
    this.setState({input});
  }

  handleSubmit = e => {
    e.preventDefault();
    this.setState({isPalindrome: this.isPalindrome(this.state.input), input: ''});
  }

  isPalindrome = word => {
    const reverseWord = word.split('').reverse().join('');
    if(word.toLowerCase() === reverseWord.toLowerCase()) {
      return true;
    }
    return false;
  }

  render() {
    return (
      <Providers>
        <div className="App">
          <form onSubmit={this.handleSubmit}>
            <input value={this.state.input} onChange={e => this.handleInput(e)} placeholder="type here"/>
            <button type="submit">Submit</button>
          </form>
          {this.state.isPalindrome && <p>This is a palindrome</p>}
          {this.state.isPalindrome === false && <p>This is NOT a palindrome</p>}
        <Child/>
        </div>
      </Providers>
    );
  }
}

export default App;