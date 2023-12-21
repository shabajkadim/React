import './../Styles/Navbar.css'
import './../Styles/Global.css'
import { useNavigate } from 'react-router-dom';

function Navbar(){
    const router = useNavigate ();
    return(
        <div className='nav-parent'>
            <div className='flex w-15'>
                <p onClick = {()=> router('/') }>Home</p>
            </div>
            <div className='flex w-45'>
                <p onClick = {()=> router('./Nopagefound') }>MAN</p>
                <p onClick = {()=> router('./Nopagefound') }>WOMAN</p>
                <p onClick = {()=> router('./Nopagefound') }>KIDS</p>
            </div>
            <div className='flex w-20'>
                <p onClick = {()=> router('./Login2') }>LOGIN</p>
                <p onClick={()=> router('./register-2')}>REGISTER</p>
            </div>
        </div>
    )
}
export default Navbar;