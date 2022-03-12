import React from "react"
// import PropTypes from "prop-types"
import {
  NavLink,
  BrowserRouter as Router,
  Route,
  Routes
} from "react-router-dom"
import { Nav, NavItem } from "reactstrap"

import About from "./pages/About"
import Home from "./pages/Home"
class App extends React.Component {
  render () {
    return (
      <>
        <Router>
          <Nav>
            <NavItem>
              <NavLink to="/">Home</NavLink>
            </NavItem>
            <NavItem>
              <NavLink to="/about">About</NavLink>
            </NavItem>
          </Nav>
          <Routes>
            <Route exact path="/" element={<Home />} />
            <Route path="/about" element={<About />} />
          </Routes>
        </Router>
      </>
    );
  }
}

export default App
