import { useState } from "react"
import { signUp } from '../../config/firebase'
function SignUp(){
    const [firstName, setFirstName] = useState()
    const [lastName, setLastName] = useState()
    const [email, setEmail] = useState()
    const [phone, setPhone] = useState()
    const [password, setPassword] = useState()
    const [confirmPassword, setConfirmPassword] = useState()
    // const [allData,setAllData] = useState({})
    const createAccount = () => {
        signUp(email,password,firstName,lastName,phone,confirmPassword)
    }
    return(
        <div>
            <h1>SignUp Form</h1>
            <label>First Name * </label>
            <input placeholder="Enter First name" onChange={(e)=>setFirstName(e.target.value)}/> &nbsp; &nbsp;
            <label>Last Name * </label>
            <input placeholder="Enter Last name" onChange={(e)=>setLastName(e.target.value)}/>
            <br />
            <label>E-mail *  </label>
            <input placeholder="Email" onChange={(e)=>setEmail(e.target.value)}/> &nbsp; &nbsp; 
            <label>Phone * </label>
            <input placeholder="Phone" onChange={(e)=>setPhone(e.target.value)}/>
            <br />
            <label>Password * </label>
            <input type="password" placeholder="Password" onChange={(e)=>setPassword(e.target.value)}/> &nbsp; &nbsp;
            <label>Confirm Password * </label>
            <input type="password" placeholder="Confirm Password" onChange={(e)=>setConfirmPassword(e.target.value)}/>
            <br /><br />
            <button onClick={createAccount}>Create Account</button>
        </div>
    )
}

export default SignUp