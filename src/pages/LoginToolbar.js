import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import { UserContext } from '../helpers/UserContext';

class LoginToolbar extends Component {
  render() {
    return (
      <UserContext.Consumer>
        {({user, signOutUser}) => user.signedIn && <p>
          <span>{user.name}</span>
          | <Link to="#" onClick={() => signOutUser()}>Log out</Link>
        </p>}
      </UserContext.Consumer>
    );
  }
}

export default LoginToolbar;
