import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import Store from './components/app.js';

class App extends Component {

  render() {
    return (
      <div>
        123
        <Store />
      </div>
    );
  }
}


ReactDOM.render(
    <App />,
    document.querySelector('.container')
);
