import React, {useEffect, useState} from 'react'
import { Navbar, Nav, Container } from 'react-bootstrap'
import { Link } from 'react-router-dom'
import './App.css';
import Login from './components/Login'
import Signup from './components/Signup'
import Account from './components/Account'
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom'

function App() {
  return (
    <div className="App">
      <Navbar bg="primary" variant="dark" className = 'navbar'>
        <Container>
          <Navbar.Brand href="/">COURSE-TRACKER</Navbar.Brand>
        </Container>
      </Navbar>
      <Router>
          <Switch>
              <Route exact path = "/login">
                <Login users=""/>
              </Route>
              <Route exact path="/">
                <Signup />
              </Route>
              <Route exact path='/users/:id'>
                <Account />
              </Route>
          </Switch>
      </Router>
    </div>
  );
}

export default App;
