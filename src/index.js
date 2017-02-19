import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import Store from './components/app.js';

class App extends Component {

  render() {
    return (
      <div className="up">
        <Store />
      </div>
    );
  }
}


ReactDOM.render(
    <App />,
    document.querySelector('.app')
);
