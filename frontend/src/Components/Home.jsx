import toast from "react-hot-toast";
import Navbar from "./Navbar";
import { useContext} from "react";
import { MyContext } from "../Context/AuthContext";


function Home (){

    const {state , dispatch} = useContext(MyContext);
    console.log(state,"state")
    return (
        <div>
            <h1>Name:{state.user?.name} </h1>
           <h1> Home page </h1>
           <button onClick={()=>toast.success("Success")}>Success</button> <br/>
           <button onClick={()=>toast.error("Error")}>Error</button>
        </div>
    )
}

export default Home;    