import React, {useEffect, useState} from 'react'
import { Navbar, Container } from 'react-bootstrap'
import './App.css';
import Login from './components/Login'
import Signup from './components/Signup'
import Account from './components/Account'
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom'

function App() {

  // const [loading, setLoading] = useState(false)
  const [userName, setUserName] = useState("")
  const [user, setUser] = useState({})
  const [courses, setCourses] = useState([])

  const fetchUsers = () => {
      fetch(`http://localhost:9292/users/search?q=${userName}`)
          .then(res => res.json())
          .then(data => {
            setUser(data.user)
            setCourses(data.userCourses)
          })
          
  }
  

  const updateCourses = (id) => {
    const updatedCourses = courses.filter(course => course.id !== id)
    setCourses(updatedCourses)
  }

  useEffect(() => {
      fetchUsers()
  }, [userName])

  return (
    <div className="App">
      <Navbar bg="primary" variant="dark" className = 'navbar' bg="dark">
        <Container>
          <Navbar.Brand href="/">COURSE-TRACKER</Navbar.Brand>
        </Container>
      </Navbar>
      <Router>
          <Switch>
              <Route exact path = "/login">
                <Login setUserName={setUserName} user={user}/>
              </Route>
              <Route exact path="/">
                <Signup />
              </Route>
              <Route exact path='/users'>
                <Account updateCourses={updateCourses} courses={courses} userName={userName}/>
              </Route>
          </Switch>
      </Router>
    </div>
  );
}

export default App;
