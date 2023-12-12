import { useState } from "react"


function Registerform() {

    const [UserData, setUserData] = useState({ name: "", email: "", password: "" })
    
    function handlesubmit(e) {
        e.preventDefault();
        setUserData({ name: "", email: "", password: "" })
    }

    function handleChange(e) {
        setUserData({ ...UserData, [e.target.name]: e.target.value });
        console.log(UserData, "userdata")
    }

    return (
        <div>
            <h1>Register form</h1>
            <form onSubmit={handlesubmit}>
                <label>Name:</label>
                <input type="text" required onChange={handleChange} name='name' value={UserData.name} /><br /><br />
                <label>Email:</label>
                <input type="email" required onChange={handleChange} name='email' value={UserData.email} /><br /><br />
                <label>Password</label>
                <input type="password" required onChange={handleChange} name='password' value={UserData.password} /><br /><br />
                <input type="submit" value="Register" />
            </form>
        </div>
    )
}
export default Registerform;