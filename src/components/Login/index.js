import { useState } from "react"
import { Link, useHistory } from "react-router-dom"
import { login } from "../../config/firebase"
import './index.css'
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
                <h1>Hello world</h1>
            </div>
            <div className="login-form">
                <p id="english-dropdown">English (USA)
                <select>
                    <option></option>
                </select>
                </p>
                <p id="start-text">&nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; START WITH GULLAH MARKETPLACE</p>
                <h1 id="heading">Log in to Gullah Marketplace</h1>
                <p>Not a member yet? &nbsp;
                    <Link to="/signup" id="signup-tag">Sign up now</Link>
                </p>
                <label>E-mail* </label>
                <input placeholder="example@gmail.com" onChange={(e)=>setEmail(e.target.value)}/>
                <br />
                <label>Password* </label>
                <input type="password" placeholder="******" onChange={(e)=>setPassword(e.target.value)}/>
                <br />
                <button onClick={signIn}>Login</button>
            </div>
        </div>
    )
}

export default Login