import React, { Component } from 'react';
import { Switch, Route } from 'react-router-dom';
import Empty from './components/Empty';
import UsersList from './components/UsersList';
import UserDetail from './components/UserDetail';
import './App.css'

class App extends Component {
  render() {
    return (
      <div>
        <Switch>
          <Route exact path='/' component={Empty}/>
          <Route exact path='/users/list' component={UsersList}/>
          <Route path='/users/:userId' component={UserDetail}/>
        </Switch>
      </div>
    );
  }
}

export default App;
