import { createGlobalStyle } from 'styled-components';
import { Route, Switch } from 'react-router-dom';
import React, { Component, } from 'react';
import styled from 'styled-components';

import ArrowA from './components/ArrowA';
import Footer from './components/Footer';
// import Header from './components/Header';

import Api from './pages/Api';
import Citations from './pages/Citations';
import Feature from './pages/Feature';
import Home from './pages/Home';
import Links from './pages/Links';
import Login from './pages/Login';
import LoginToolbar from './pages/LoginToolbar';
import Register from './pages/Register';
import Tags from './pages/Tags';
import Text from './pages/Text';
import Texts from './pages/Texts';

import { UserContextProvider, UserContext } from './helpers/UserContext';

import {
  BLACK,
  CONTENT_COLUMNS_SPAN,
  CONTENT_COLUMNS_START,
  DESKTOP_BREAKPOINT,
  LINE_HEIGHT,
  PAGE_COLUMNS_SPAN,
  RED,
  SANS_FONT_SIZE,
  TAB,
  TITLE_FONT_SIZE,
  TITLE_LINE_HEIGHT,
  WHITE,
} from './variables';

const GlobalStyles = createGlobalStyle`
  html,
  body {
    height: 100.1%;
  }
  body {
    background-color: ${WHITE};
    color: ${BLACK};
    font-family: 'Lato', sans-serif;
    /* font-family: 'Roboto', sans-serif; */
    font-size: ${SANS_FONT_SIZE};
    line-height: ${LINE_HEIGHT};
  }
  #app {
    min-height: 100%;
    min-width: 100%;
  }
  h2 {
    color: ${RED};
    font-size: ${TITLE_FONT_SIZE};
    line-height: ${TITLE_LINE_HEIGHT};
  }
  h3 {
    display: none;
  }
  a {
    color: ${BLACK};
    text-decoration: none;
    &[href*=//]:hover {
      color: blue;
    }
  }
  ol,
  ul {
    list-style-type: none;
  }
`;

const StyledPage = styled.div`
  ${'' /* font-family: 'Roboto', sans-serif; */}
  font-family: 'Lato', sans-serif;
  padding: 0 ${TAB} ${LINE_HEIGHT};

  @media screen and (min-width: ${DESKTOP_BREAKPOINT}) {
    display: grid;
    grid-column-gap: ${TAB};
    grid-template-columns: repeat(${PAGE_COLUMNS_SPAN}, 1fr);
  }

  #content {
    grid-column-end: span ${CONTENT_COLUMNS_SPAN};
    grid-column-start: ${CONTENT_COLUMNS_START};
  }
`;

class App extends Component {
  render() {
    return (
      <StyledPage className="App">
        <GlobalStyles />
        <UserContextProvider>
          {/* <Header /> */}
          <section id="content">
            <Switch>
              <Route path="/texts/:id" component={Text} />
              <Route exact path="/texts" component={Texts} />
              <Route exact path="/citations" component={Citations} />
              <Route exact path="/links" component={Links} />
              <Route exact path="/tags" component={Tags} />
              <Route exact path="/api" component={Api} />
              <Route exact path="/user/register" component={Register} />
              <Route exact path="/:feature/:featureId" component={Feature} />
              <Route exact path="/:feature" component={Feature} />
              <Route exact path="/" component={Home} />
            </Switch>
          </section>
          <Footer />
          <hr />
          {/* <footer className="App-header">
            <ul>
              <li><Link to="/">Home</Link></li>
              <li><Link to="/texts">Texts</Link></li>
              <li><Link to="/citations">Citations</Link></li>
              <li><Link to="/links">Links</Link></li>
              <li><Link to="/tags">Tags</Link></li>
              <li><Link to="/api">API</Link></li>
            </ul>
          </footer> */}
          <UserContext.Consumer>
            {({user}) => user.signedIn? <LoginToolbar /> : <Login />}
          </UserContext.Consumer>
        </UserContextProvider>
      </StyledPage>
    );
  }
}

export default App;
