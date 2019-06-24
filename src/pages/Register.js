import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import gql from 'graphql-tag';
import { Mutation } from 'react-apollo';

const REGISTER = gql`
  mutation RegisterUser($user: RegisterUserInput!) {
    registerUser(input: $user) {
      loggedInUser {
        firstName
        lastName
        email
      }
    }
  }
`;

class Register extends Component {

  render() {
    let firstNameInput,
      lastNameInput,
      emailInput,
      passwordInput;

    return (
      <Mutation mutation={REGISTER}>
        {(registerUser, { loading, error, data }) => (
          <div>
            {error && <p>Error! {error.message}</p>}
            <form
              onSubmit={event => {
                event.preventDefault();
                registerUser({
                  variables: {
                    user: {
                      firstName: firstNameInput.value,
                      lastName: lastNameInput.value,
                      email: emailInput.value,
                      password: passwordInput.value,
                    }
                  }
                });
              }}
            >
              <input
                ref={node => { firstNameInput = node; }}
                required
              />
              <input
                ref={node => { lastNameInput = node; }}
                required
              />
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
              <button type="submit">Register</button>
            </form>
            <Link to="/user/login">Already registered?</Link>
          </div>
        )}
      </Mutation>
    );
  };
}

export default Register;
