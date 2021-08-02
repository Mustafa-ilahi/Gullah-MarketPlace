import { useState } from "react";
import { Link, useHistory } from "react-router-dom";
import { login } from "../../config/firebase";
import './index.css';
import gIcon from '../../assets/g-icon.PNG';
import sideImg from '../../assets/login-img.PNG'

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
                <p id="start-text">&nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; START WITH GULLAH MARKETPLACE</p>
                <h1 id="heading">&nbsp; &nbsp; &nbsp; &nbsp;  &nbsp;Log in to Gullah Marketplace</h1>
                <p id="not-member">&nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; Not a member yet? &nbsp;
                    <Link to="/signup" id="signup-tag">Sign up now</Link>
                </p>
                <label>&nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; E-mail* </label>
                <br />
                <input placeholder="example@gmail.com" onChange={(e)=>setEmail(e.target.value)}/>
                <br />
                <label>&nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; Password* </label>
                <br />
                <input type="password" placeholder="*********" onChange={(e)=>setPassword(e.target.value)}/>
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