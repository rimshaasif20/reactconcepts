import React from 'react'
import {Navbar, Nav} from 'react-bootstrap'
import { NavLink } from 'react-router-dom'

function Navigate() {
  return (
    <div>
    <Navbar bg="primary" variant="dark" className='container'>
        
          <Navbar.Brand to ="/" style={{marginLeft: '5px'}}>AppsGenii Technologies</Navbar.Brand>
          
          <Nav className="mr-auto navbar">
            <Nav.Link>
          <NavLink to="/" className="nav-link active" >Home</NavLink>
             </Nav.Link>
            <Nav.Link >
            <NavLink to="/about" className="nav-link active" >About</NavLink>
            </Nav.Link>
            <Nav.Link>
            <NavLink to="/services" className="nav-link active" >Services</NavLink>
                </Nav.Link> 
                <Nav.Link>
            <NavLink to="/contact" className="nav-link active" >Contact us</NavLink>
                </Nav.Link> 
          </Nav>
       
      </Navbar>
      </div>
  )
}

export default Navigate