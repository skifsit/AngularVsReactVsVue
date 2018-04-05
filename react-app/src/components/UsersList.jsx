import React, { Component } from 'react';
import NavBar from './NavBar'

class UsersList extends Component {
  constructor (props, context) {
    super(props, context)

    this.state = {
      users: [],
      fetching: false
    }
  }

  render() {
    const {fetching, users} = this.state

    return (
      <div>
        <NavBar />
        {fetching ? (
          <div>
            FETCHING...
          </div>
        ) : (
          <div>{users.map(user => {
            return (
              <div key={user.id} className="flex-row">
                <div>{user.id}</div>
                <div>{user.name}</div>
                <div>{user.email}</div>
              </div>
            )
          })}
          </div>
        )}
      </div>
    );
  }

  loadUsers () {
    this.setState({fetching: true})
    fetch('http://jsonplaceholder.typicode.com/users')
      .then(res => res.json()).then(users => {
      this.setState({fetching: false, users})
    })
  }

  componentDidMount () {
    this.loadUsers()
  }
}

export default UsersList;
