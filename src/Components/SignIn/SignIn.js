import React, { useState } from 'react'
import './SignIn.css'
import { getAuth, signInWithEmailAndPassword } from "firebase/auth";
import { useNavigate } from 'react-router-dom';
import { Alert } from 'react-bootstrap';



function SignIn() {
    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')
    const [alertStyle, setAlertStyle] = useState('')
    const [alertMessage, setAlertMessage] = useState('')
    let navigate = useNavigate()

    const handleSubmit = (e) => {
        e.preventDefault()
        const auth = getAuth();
        signInWithEmailAndPassword(auth, email, password)
            .then((userCredential) => {
                setAlertMessage("Successfully Signed In")
                setAlertStyle("success")
                setTimeout(() => {
                    setAlertStyle("")
                navigate("/home")
                }, 2000);
            })
            .catch((error) => {
                setAlertMessage(error.message)
                setAlertStyle("danger")
                setTimeout(() => {
                    setAlertStyle("")
                }, 2000);

            });
    }

    return (

        <div className='signin' >
            <div className='dark'>
                <div className="nav">
                    <img className='logo1' src="https://upload.wikimedia.org/wikipedia/commons/thumb/0/08/Netflix_2015_logo.svg/1920px-Netflix_2015_logo.svg.png" alt="" />
                </div>
                {alertStyle && <div className='alert-support' >
                     <Alert variant={alertStyle}>
                        {alertMessage}
                    </Alert>
                </div>}
                <div className="body1">

                    <div className="content1 col-sm-12 col-md-4 ">

                        <h3>Sign In</h3>

                        <input className='box' type="input" placeholder='Email' onChange={(e) => setEmail(e.target.value)} />
                        <input className='box' type="password" placeholder='Password' onChange={(e) => setPassword(e.target.value)} /><br />
                        <button onClick={handleSubmit}>Sign In</button>
                        <div>
                            <p id='pp'>Need Help?</p>
                        </div>
                        <div>
                            <p style={{ display: "inline-block", marginRight: "45px", marginTop: "10px" }}>New to Netflix?</p><a style={{ display: "inline-block", margin: "0px", textDecoration: "none", color: "white", fontWeight: "bolder" }} href="/" >Sign Up Now</a>
                            <p style={{ display: "inline-block", fontSize: "12px", paddingTop: "10px", paddingLeft: "80px", paddingRight: "80px" }} > This page is protected by Google reCAPTCHA to ensure you're not a bot.</p><a style={{ display: "inline-block", fontSize: "12px" }} href="https://policies.google.com/privacy">learn more</a>
                        </div>
                    </div>

                </div>

            </div>
        </div>

    )
}

export default SignIn