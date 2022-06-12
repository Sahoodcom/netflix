import React, {  useState } from 'react'
import './SignUp.css'
import { getAuth, createUserWithEmailAndPassword } from "firebase/auth";
import { useNavigate } from 'react-router-dom';
import { Alert as Alert } from 'react-bootstrap';


function SignUp() {
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
   const [alertStyle, setAlertStyle] = useState('')
    const [alertMessage, setAlertMessage] = useState('')
  let navigate = useNavigate()
    
    const handleSubmit = (e) => {
     e.preventDefault()
     const auth = getAuth();
      createUserWithEmailAndPassword(auth, email, password)
      .then((userCredential) => {
        setAlertMessage("Account Successfully Created ")
        setAlertStyle("success")
        setTimeout(() => {
          setAlertStyle("")
          navigate("/signin") 
      }, 2000);
      })
      .catch((error) => {
        setAlertMessage( error.message)
        setAlertStyle("danger")
        setTimeout(() => {
          setAlertStyle("")
      }, 1500);
      });                               
    }

    const signIn = () => {
      navigate('/signin')
    }
  return (
    <div className='signup col-12 fluid' >
    <img src="https://assets.nflxext.com/ffe/siteui/vlv3/f841d4c7-10e1-40af-bcae-07a3f8dc141a/8e07a611-4ced-4d4e-81e6-d278862c952b/IN-en-20220502-popsignuptwoweeks-perspective_alpha_website_small.jpg " 
    className='signup-image'
    alt="background" />
        <div className='dark'>
            <div className="nav col-12 ">
              
                <img className='logo-signup' src="https://upload.wikimedia.org/wikipedia/commons/thumb/0/08/Netflix_2015_logo.svg/1920px-Netflix_2015_logo.svg.png" alt="" />
               
                 <button type="submit" className='SIGNup' onClick={signIn} >Sign In</button>
                
            </div>
            
            <div className="body">
                <div className="content col-sm-12 col-md-6">
                <p id='signup-title' >Unlimited movies, TV <br /> shows and more.</p>
                <p id='signup-title-2'>Watch anywhere. Cancel anytime.</p>
                <p id='signup-title-3' >Ready to watch? Enter your email to create your membership.</p> <br /> <br />
                
                <input type="email" placeholder='Email' onChange={(e)=>setEmail(e.target.value)} />  
                <input type="text" placeholder='Password' onChange={(e)=>setPassword(e.target.value)} /><br /> 
                
                <button type='submit' onClick={handleSubmit} className='signin-button-start' >Get Started <i class="fa fa-angle-right"></i></button>
                </div>
            </div>
             { alertStyle && <div className='alert-support' >
                     <Alert variant={alertStyle}>
                        {alertMessage}
                    </Alert> 
                </div> }
        </div>
    </div>
  )
}

export default SignUp