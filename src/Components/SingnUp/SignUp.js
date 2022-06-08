import React, {  useState } from 'react'
import './SignUp.css'
import { getAuth, createUserWithEmailAndPassword } from "firebase/auth";
import { useNavigate } from 'react-router-dom';


function SignUp() {
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  let navigate = useNavigate()
    
    const handleSubmit = (e) => {
     e.preventDefault()
     const auth = getAuth();
      createUserWithEmailAndPassword(auth, email, password)
      .then((userCredential) => {
        (alert("Account Successfully Created "))
        navigate("/signin") 
      })
      .catch((error) => {
        (alert( error.message))
      });                               
    }

    const signIn = () => {
      navigate('/signin')
    }
  return (
    <div className='signup' >
    
        <div className='dark'>
            <div className="nav">
                <img className='logo1' src="https://upload.wikimedia.org/wikipedia/commons/thumb/0/08/Netflix_2015_logo.svg/1920px-Netflix_2015_logo.svg.png" alt="" />
               
                 <button type="submit" onClick={signIn} >Sign In</button>
                
            </div>
            <div className="body">
                <div className="content">
                <h1>Unlimited movies, TV <br /> shows and more.</h1>
                <h3>Watch anywhere. Cancel anytime.</h3>
                <p>Ready to watch? Enter your email to create your membership.</p>
                
                <input type="email" placeholder='Email' onChange={(e)=>setEmail(e.target.value)} />  <br /> 
                <input type="text" placeholder='Password' onChange={(e)=>setPassword(e.target.value)} /><br /> <br />
                
                <button type='submit' onClick={handleSubmit} >Get Started <i class="fa fa-angle-right"></i></button>
                </div>
            </div>
        </div>
    </div>
  )
}

export default SignUp