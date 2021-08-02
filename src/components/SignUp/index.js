import { useState } from "react"
import { useHistory,Link } from "react-router-dom"
import { signUp } from '../../config/firebase'
import './signup.css'
import gIcon from '../../assets/g-icon.PNG';
import sideImg from '../../assets/signup-img.PNG'

function SignUp(){
    const [firstName, setFirstName] = useState()
    const [lastName, setLastName] = useState()
    const [email, setEmail] = useState()
    const [phone, setPhone] = useState()
    const [password, setPassword] = useState()
    const [confirmPassword, setConfirmPassword] = useState()
    const history = useHistory();
    const createAccount = () => {
        signUp(email,password,firstName,lastName,phone,confirmPassword)
        history.push('/dashboard')
    }
    return(
        <div id="main-div">
            <div>
            <h2 id="gullah-heading">Gullah Marketplace</h2>
                <p id="lorem-para">Lorem ipsum is simply dummy text of the printing and typesetting industry</p>
                <img src={sideImg} id="side-img"/>
                <p id="copyright-text">&copy; 2020 Gullah Marketplace. All Rights Reserved.</p>

            </div>
            <div id="signup-div">
                <p id="english-dropdown">English (USA)
                    <select>
                        <option></option>
                    </select>
                </p>
                <p id="start-text">START WITH GULLAH MARKETPLACE</p>
                <h1 id="heading-signup">Sign up to Gullah Marketplace</h1>
                <p id="not-member">Already a member? &nbsp;
                    <Link to="/login" id="login-tag">Login now</Link>
                </p>
                <div className="name">
                <label id="first-name">First Name * </label>
                <label id="last-name">Last Name * </label><br/>
                </div>
                <div className="name-inputs">
                    &nbsp;<input id="first-name-input" placeholder="Enter First name" onChange={(e)=>setFirstName(e.target.value)}/> &nbsp; &nbsp;
                    <input id="last-name-input" placeholder="Enter Last name" onChange={(e)=>setLastName(e.target.value)}/>
                </div>
                <br />
                <div className="email-text">
                    <label>E-mail *  </label>
                    <label id="phone-text"> Phone * </label>
                </div>
                <div className="email-input">
                    <input placeholder="Email" onChange={(e)=>setEmail(e.target.value)}/> &nbsp; &nbsp; 
                    <input id="phone-input" placeholder="Phone" onChange={(e)=>setPhone(e.target.value)}/>
                </div>
                <br />
                <div className="password">
                    <label>Password * </label>
                    <label id="confirm-pass">Confirm Password * </label>
                </div>
                <div className="password-inputs">
                    <input type="password" placeholder="Password" onChange={(e)=>setPassword(e.target.value)}/> &nbsp; &nbsp;
                    <input type="password" placeholder="Confirm Password" id="confirm-pass-input" onChange={(e)=>setConfirmPassword(e.target.value)}/>
                </div>
                <br /><br />
                <button onClick={createAccount} id="create-acc-btn">Create Account</button>
                <br/><br/>
                <button id="google-login">
                    <img src={gIcon} id="g-icon"/>
                    <span id="login-text">Login with Google</span>
                </button>
                <br/><br/><br/><br/><br/>
                <p id="footer-para">The site is protected by reCAPTCHA and the Google <br/><span id="last-para"><span className="blue-text">Privacy Policy</span> and <span className="blue-text">Terms of Service</span> apply</span></p>
            </div>
        </div>
    )
}

export default SignUp