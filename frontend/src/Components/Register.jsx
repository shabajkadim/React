import { useNavigate } from "react-router-dom";




function Register(){
    const router =useNavigate ();
    return(
        <div>
        <h1>Register Page</h1>
        <button onClick={()=>router ('/login')}>Submit</button>
        </div>
    )
}
export default Register;