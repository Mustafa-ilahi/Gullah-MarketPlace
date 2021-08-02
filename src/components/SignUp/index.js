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
                <p id="start-text">&nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; START WITH GULLAH MARKETPLACE</p>
                <h1 id="heading">&nbsp; &nbsp; &nbsp; &nbsp;  &nbsp;Sign up to Gullah Marketplace</h1>
                <p id="not-member">&nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; Already a member? &nbsp;
                    <Link to="/login" id="login-tag">Login now</Link>
                </p>
                <div className="name">
                <label id="first-name">&nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; First Name * </label>
                <label id="last-name">&nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp;Last Name * </label><br/>
                </div>
                {/* <br/> */}
                <div className="fullname">
                &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp;<input id="first-name-input" placeholder="Enter First name" onChange={(e)=>setFirstName(e.target.value)}/> &nbsp; &nbsp;
                &nbsp; &nbsp; <input id="last-name-input" placeholder="Enter Last name" onChange={(e)=>setLastName(e.target.value)}/>
                </div>
                <br />
                {/* <label>E-mail *  </label>
                <input placeholder="Email" onChange={(e)=>setEmail(e.target.value)}/> &nbsp; &nbsp; 
                <label>Phone * </label>
                <input placeholder="Phone" onChange={(e)=>setPhone(e.target.value)}/>
                <br />
                <label>Password * </label>
                <input type="password" placeholder="Password" onChange={(e)=>setPassword(e.target.value)}/> &nbsp; &nbsp;
                <label>Confirm Password * </label>
                <input type="password" placeholder="Confirm Password" onChange={(e)=>setConfirmPassword(e.target.value)}/>
                <br /><br /> */}
                <button onClick={createAccount}>Create Account</button>
            </div>
        </div>
    )
}

export default SignUp