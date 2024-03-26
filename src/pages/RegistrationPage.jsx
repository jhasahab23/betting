import React, { useState } from 'react'
import "../css/page css/RegistrationPage.css"
import adultPoster2 from "../images/adult-poster-2.png"
import { Link } from 'react-router-dom'
export default function RegistrationPage() {

    const [showLoginForm , setShowLoginForm] = useState(true)
    const [showRegistrationForm , setShowRegistrationForm] = useState(false)

    const displayLoginForm = () => {
        setShowRegistrationForm(false)
        setShowLoginForm(true)
    }
    const displayRegistrationForm = () => {
        setShowRegistrationForm(true)
        setShowLoginForm(false)
    }
  return (
    <div className='registration-page'>
        <div className="registration-page-landing-section">
            <div className="registration-page-landing-section-left">
                {showLoginForm && <form className="login-form">
                    <h3>Login</h3>
                    <div className="input-box">
                        <p>Your Registered Number</p>
                        <input type="number" className="input-field" />
                    </div>
                    <div className="input-box">
                        <p>Your Password</p>
                        <input type="password" className="input-field" />
                    </div>
                    <input type="submit" value="Login" className="btn-a" />
                    <h6>Create New Account ? <span onClick={displayRegistrationForm}>Create Now</span></h6>
                </form>}
                {showRegistrationForm && <form className="registration-form login-form">
                    <h3>Register</h3>
                    <div className="input-box">
                        <p>Your Contact Number</p>
                        <input type="number" className="input-field" />
                    </div>
                    <div className="input-box">
                        <p>Create Password</p>
                        <input type="password" className="input-field" />
                    </div>
                    <div className="input-box">
                        <p>Invitation Code</p>
                        <input type="text" className="input-field" />
                    </div>
                    <div className="row">
                        <input type="checkbox" defaultChecked name="terms" id="" value="Term & Conditions" /><label for="terms">I agree to <a href="#">Terms & Conditions</a></label>
                    </div>
                    <input type="submit" value="Registration" className="btn-a" />
                    <h6>Already Have Account ? <span onClick={displayLoginForm}>Login Now</span></h6>
                </form>}
            </div>
            <div className="registration-page-landing-section-right">
                <img src={adultPoster2} alt="" />
            </div>
        </div>
    </div>
  )
}
