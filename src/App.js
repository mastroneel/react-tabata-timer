import React, { Component } from 'react';
import Timer from './components/Timer.jsx';
import './App.css';

class App extends Component {
  render() {
    return (
      <div className="panel panel-default app-content center-block">
       <div className="panel-body">
         <Timer />
       </div>
      </div>
    );
  }
}

export default App;
