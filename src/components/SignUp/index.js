import { useState } from "react"
import { useHistory,Link } from "react-router-dom"
import { signUp } from '../../config/firebase'
import './signup.css'
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
                <h1>Hello World</h1>
            </div>
            <div id="signup-div">
                <p id="english-dropdown">English (USA)
                    <select>
                        <option></option>
                    </select>
                </p>
                <p id="start-text">START WITH GULLAH MARKETPLACE</p>
                <h1 id="heading">Sign up to Gullah Marketplace</h1>
                <p id="not-member">Already a member? &nbsp;
                    <Link to="/login" id="login-tag">Login now</Link>
                </p>
                <div className="name">
                <label id="first-name">First Name * </label>
                <label id="last-name">Last Name * </label><br/>
                </div>
                <div className="name-inputs">
                    <input id="first-name-input" placeholder="Enter First name" onChange={(e)=>setFirstName(e.target.value)}/> &nbsp; &nbsp;
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
                <label>Password * </label>
                <input type="password" placeholder="Password" onChange={(e)=>setPassword(e.target.value)}/> &nbsp; &nbsp;
                <label>Confirm Password * </label>
                <input type="password" placeholder="Confirm Password" onChange={(e)=>setConfirmPassword(e.target.value)}/>
                <br /><br />
                <button onClick={createAccount}>Create Account</button>
            </div>
        </div>
    )
}

export default SignUp