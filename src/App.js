import React, { Component } from 'react';
import './App.css';
import CreateTaskForm from './containers/CreateTaskForm';
import List from './containers/List';

class App extends Component {
  render() { 
    return(
      <div className="App">
        <CreateTaskForm />
        <List />
      </div>

    );
  }
  
}

export default App;
