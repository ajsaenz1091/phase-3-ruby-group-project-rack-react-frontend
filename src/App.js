import React, {useEffect, useState} from 'react'
import { Navbar, Nav, Container } from 'react-bootstrap'
import { Link } from 'react-router-dom'
import './App.css';
import Login from './components/Login'
import Signup from './components/Signup'
import Account from './components/Account'
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom'

function App() {

  const [loading, setLoading] = useState(true)
  const [users, setUsers] = useState({})
  const [courses, setCourses] = useState([])

  const fetchUsers = () => {
      fetch("http://localhost:9292/users")
          .then(res => res.json())
          .then(data => {
            setUsers(data)
            setLoading(false)  
          })
          // .then(data => console.log(data))
  }
  
  const fetchCourses = () => {
      fetch(`https://localhost:9292/courses`)
          .then(res => res.json())
          .then(data => setCourses(data))
  }

  useEffect(() => {
      fetchUsers()
      fetchCourses()
  }, [])

  if (loading){
    return (
      <div>
        ...Loading
      </div>
    )
  }

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
                <Login users={users}/>
              </Route>
              <Route exact path="/">
                <Signup />
              </Route>
              <Route exact path='/users/:id'>
                <Account users={users}/>
              </Route>
          </Switch>
      </Router>
    </div>
  );
}

export default App;
