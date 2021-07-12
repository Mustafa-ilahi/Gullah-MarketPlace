import { useState } from "react"
import { login } from "../../config/firebase"

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
        <div>
            <h1>LogIn Form</h1>
            <label>E-mail* </label>
            <input placeholder="example@gmail.com" onChange={(e)=>setEmail(e.target.value)}/>
            <br />
            <label>Password* </label>
            <input placeholder="******" onChange={(e)=>setPassword(e.target.value)}/>
            <br />
            <button onClick={signIn}>Login</button>
        </div>
    )
}

export default Login