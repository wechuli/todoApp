import React, { Component } from 'react';
import {Route} from 'react-router-dom'

import Header from '../components/Header'
import Todo from '../components/Todo'
import TodoList from '../components/TodoList'

class App extends Component {
  render() {
    return (
      <React.Fragment>
        <Header/>
        <Route path='/' exact component={TodoList}/>
      </React.Fragment>
    );
  }
}

export default App;
