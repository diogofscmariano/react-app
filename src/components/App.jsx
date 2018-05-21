import React from 'react';
import { Component } from 'react';
import { eventRegistry } from 'app-mediator';
import '../style/main.css';

export default class App extends Component {
  constructor(props) {
    super(props);
    this.state = { counter: 0 };
    eventRegistry.subscribe('some-event', () => this.increment());
  }

  increment() {
    this.setState({
      counter: this.state.counter + 1
    });
  }

  onClick(e) {
    eventRegistry.dispatch('some-event');
  }

  render() {
    return (
      <div className="app">
        <h2>React App</h2>
        <h4>{this.state.counter}</h4>
        <button onClick={(e) => this.onClick(e)}>increment</button>
      </div>
    );
  }
}
