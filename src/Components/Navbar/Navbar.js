import React from 'react'
import { useNavigate } from 'react-router-dom'
import './Navbar.css'
import {Link,Outlet} from 'react-router-dom'
import { getAuth, signOut} from "firebase/auth";

function Navbar() {
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
    <div className='navbar'>

       <img className='logo' onClick={home} src="https://upload.wikimedia.org/wikipedia/commons/thumb/0/08/Netflix_2015_logo.svg/1920px-Netflix_2015_logo.svg.png" alt="" />
       <img className='avatar' src="https://i.pinimg.com/originals/0d/dc/ca/0ddccae723d85a703b798a5e682c23c1.png" alt="" />

     <div >
         <div><button id='auth_button' onClick={Signout}>Sign Out</button></div> 
       <nav >
           <div className='link'>
        <Link className='tag' to="/home">Home</Link> 
        {/* <Link className='tag' to="/popular">Popular</Link>  */}
        <Link className='tag' to="/tvshows">TV Show</Link> 
        <Link className='tag' to="/upcoming">Upcoming</Link>
        <Link className='tag' to="/mylist">My List</Link>
          </div>
          
       </nav>
     </div>
    </div>
    <Outlet/>
    </div>
    
    
  )
}

export default Navbar