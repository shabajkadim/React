import toast from "react-hot-toast";
import Navbar from "./Navbar";


function Home (){
    return (
        <div>
           <h1> Home page</h1>
           <button onClick={()=>toast.success("Success")}>Success</button> <br/>
           <button onClick={()=>toast.error("Error")}>Error</button>
        </div>
    )
}

export default Home;