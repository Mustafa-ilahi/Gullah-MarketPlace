import { useState } from "react"
import { login } from "../../config/firebase"
import './index.css'
function Login(){
    const [email,setEmail] = useState()
    const [password,setPassword] = useState()

    const signIn = async() => {
        try{
            const user = await login(email,password)
            alert("User logged in successfully");
        }
        catch(e){
            alert(e.message)
        }
    }
    return(
        <div className="main-div">
            <div>
                <h1>Hello world</h1>
            </div>
            <div className="login-form">

                <h1 id="heading">Log in to Gullah Marketplace</h1>
                <label>E-mail* </label>
                <input placeholder="example@gmail.com" onChange={(e)=>setEmail(e.target.value)}/>
                <br />
                <label>Password* </label>
                <input placeholder="******" onChange={(e)=>setPassword(e.target.value)}/>
                <br />
                <button onClick={signIn}>Login</button>
            </div>
        </div>
    )
}

export default Login