import React from 'react'
import { useNavigate } from 'react-router-dom'
import './Navbar.css'
import {Link,Outlet} from 'react-router-dom'
import { getAuth, signOut} from "firebase/auth";
import { Container,Nav,Navbar,NavDropdown } from "react-bootstrap"

function NavBar() {
    let navigate = useNavigate()
    const auth = getAuth();
    const Signout = (e) =>{
        
        signOut(auth).then(() => {
        navigate("/signin")
        }).catch((error) => {
        alert(error.message)
        alert("Something Went Wrong")
})

    }
   const home = () =>{
    navigate("/home")

   }

  return (
    <div>
    <Navbar bg="dark" expand="lg" className='navbar-dark'>
  <Container>
  <a class="navbar-brand" >
  <img className='logo' onClick={home} src="https://upload.wikimedia.org/wikipedia/commons/thumb/0/08/Netflix_2015_logo.svg/1920px-Netflix_2015_logo.svg.png" alt="logo" />
  </a>
    <Navbar.Toggle aria-controls="basic-navbar-nav"  />
    <Navbar.Collapse id="basic-navbar-nav">
      <Nav>
        <Nav.Link ><Link className='tag nav-link' to="/home">Home</Link></Nav.Link>
        <Nav.Link ><Link className='tag nav-link' to="/tvshows">TV Shows</Link></Nav.Link>
        <Nav.Link ><Link className='tag nav-link' to="/upcoming">Upcoming</Link></Nav.Link>
        <Nav.Link ><Link className='tag nav-link' to="/mylist">My List</Link></Nav.Link>
      </Nav>
    </Navbar.Collapse>
  {/* <a class="navbar-brand" >
    <img className='avatar' src="https://i.pinimg.com/originals/0d/dc/ca/0ddccae723d85a703b798a5e682c23c1.png" alt="logo" />
    </a> */}
    <Navbar.Text  className='fw-bold' >
    <Link className='tag nav-link' to="/"> Sign Out</Link>
      </Navbar.Text>
  </Container>
</Navbar>

    <Outlet/>
    </div>
    
    
  )
}

export default NavBar