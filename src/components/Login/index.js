import { useState } from "react";
import { Link, useHistory } from "react-router-dom";
import { login } from "../../config/firebase";
import './login.css';
import gIcon from '../../assets/g-icon.PNG';
import sideImg from '../../assets/login-img.PNG'
import mailIcon from '../../assets/mail-icon.PNG'
import passIcon from '../../assets/pass-icon.PNG'

function Login(){
    const [email,setEmail] = useState()
    const [password,setPassword] = useState()
    const history = useHistory();

    const signIn = async() => {
        try{
            const user = await login(email,password)
            history.push('/dashboard')
        }
        catch(e){
            alert(e.message)
        }
    }
    return(
        <div className="main-div">
            <div id="left-div">
                <h2 id="gullah-heading">Gullah Marketplace</h2>
                <p id="lorem-para">Lorem ipsum is simply dummy text of the printing and typesetting industry</p>
                <img src={sideImg} id="side-img"/>
                <br/>
                <p id="copyright-text">&copy; 2020 Gullah Marketplace. All Rights Reserved.</p>
            </div>
            <div className="login-form">
                <p id="english-dropdown">English (USA)
                <select>
                    <option></option>
                </select>
                </p>
                <p id="start-text-login">START WITH GULLAH MARKETPLACE</p>
                <h1 id="heading">Log in to Gullah Marketplace</h1>
                <p id="not-member-log-in">Not a member yet? &nbsp;
                    <Link to="/signup" id="signup-tag">Sign up now</Link>
                </p>
                <label className="label"> E-mail* </label>
                <br />
                <input className="input-fields" placeholder="example@gmail.com" onChange={(e)=>setEmail(e.target.value)}/>
                <img src={mailIcon} id="mail-icon"/>
                <br />
                <label className="label"> Password* </label>
                <br />
                <input  className="input-fields" type="password" placeholder="*********" onChange={(e)=>setPassword(e.target.value)}/>
                <img src={passIcon} id="pass-icon"/>
                <br />
                <button onClick={signIn} id="login-btn">Login</button>
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

export default Login