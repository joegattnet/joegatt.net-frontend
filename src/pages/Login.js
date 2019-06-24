import React, { Component } from 'react';
import gql from 'graphql-tag';
import { Link } from 'react-router-dom';
import { Mutation } from 'react-apollo';
import { UserContext } from '../helpers/UserContext';

const LOGIN = gql`
  mutation AuthenticateUser($user: AuthenticateUserInput!) {
    authenticateUser(input: $user) {
      jwtToken
    }
  }
`;

class Login extends Component {

  render() {
    let emailInput,
      passwordInput;

    return (
      <Mutation
        mutation={LOGIN}
        onCompleted={data => {
          const token = data.authenticateUser.jwtToken;
          if (!token) {
            return;
          }
        }}
      >
        {(authenticateUser, { loading, error, data, client }) => {
          if (data && data.authenticateUser.jwtToken) {
            localStorage.setItem('authToken', data.authenticateUser.jwtToken);
            client.resetStore();
            const parsedToken = JSON.parse(window.atob(data.authenticateUser.jwtToken.split('.')[1]));
            client.writeData({ data: {
              user: {
                exp: parsedToken.exp,
                firstName: parsedToken.first_name,
                lastName: parsedToken.last_name,
                role: parsedToken.role,
                userId: parsedToken.user_id,
              }
            }});
            return (
              <div>
                <UserContext.Consumer>
                  {({user, signInUser}) => !user.signedIn && signInUser()}
                </UserContext.Consumer>
              </div>
            );
          }

          return (
            <div>
              {error && <p>Error! {error.message}</p>}
              {data && !authenticateUser.jwtToken && <p>
                Log in failed!
              </p>}
              {!authenticateUser.jwtToken &&
                <form
                  onSubmit={event => {
                    event.preventDefault();
                    authenticateUser({
                      variables: {
                        user: {
                          email: emailInput.value,
                          password: passwordInput.value,
                        }
                      }
                    }).then(response => <strong>LOGGEDIN</strong>)
                      .catch(err => console.log('ERROR, err'));
                  }}
                >
                  <input
                    ref={node => { emailInput = node; }}
                    type="email"
                    required
                  />
                  <input
                    ref={node => { passwordInput = node; }}
                    type="password"
                    pattern="(?=.*\d)(?=.*[a-z])(?=.*[A-Z]).{8,}"
                    required
                  />
                  <button type="submit">Log in</button>
                </form>
              }
              <Link to="/user/register">Not yet registered?</Link>
            </div>
          );
        }}
      </Mutation>
    );
  };
}

export default Login;
