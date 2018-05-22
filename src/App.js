import React, { Component } from 'react';
import './App.css';

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
      <div className="App">
        <form onSubmit={this.handleSubmit}>
          <input value={this.state.input} onChange={e => this.handleInput(e)} placeholder="type here to check if your word is a Palindrome"/>
          <button type="submit">Submit</button>
        </form>
        {this.state.isPalindrome && <p>This is a palindrome</p>}
        {this.state.isPalindrome === false && <p>This is NOT a palindrome</p>}
      </div>
    );
  }
}

export default App;
