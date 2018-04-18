import React, { Component } from 'react';
import NavBar from './NavBar'

class UserDetail extends Component {
  constructor (props, context) {
    super(props, context)

    this.state = {
      user: null,
      fetching: false
    }
  }

  render() {
    const {fetching, user} = this.state

    return (
      <div>
        <NavBar />
        {fetching ? (
          <div>
            FETCHING...
          </div>
        ) : (
          user ? (
            <div>
              <h1>Detail information:</h1>
              <div>
                <div>{user.id}</div>
                <div>{user.name}</div>
                <div>{user.email}</div>
              </div>
            </div>
          ) : null
        )}
      </div>
    );
  }

  loadUser (id) {
    this.setState({fetching: true})
    fetch(`http://jsonplaceholder.typicode.com/users/${id}`)
      .then(res => res.json()).then(user => {
      this.setState({fetching: false, user})
    })
  }

  componentDidMount () {
    this.loadUser(this.props.match.params.userId)
  }
}

export default UserDetail;
