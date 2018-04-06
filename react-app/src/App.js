import React, { Component } from 'react';
import { Switch, Route } from 'react-router-dom';
import Empty from './components/Empty';
import UsersList from './components/UsersList';
import './App.css'

class App extends Component {
  render() {
    return (
      <div>
        <Switch>
          <Route exact path='/' component={Empty}/>
          <Route exact path='/users/list' component={UsersList}/>
        </Switch>
      </div>
    );
  }
}

export default App;
