import logo from './logo.svg';
import './App.css';
import { Route,Routes } from 'react-router-dom';
import Home from './Components/Home';
import Login from './Components/Login';
import Register from './Components/Register';
import Nopagefound from './Components/Nopagefound';
import Navbar from './Components/Navbar';
import Footer from './Components/Footer';
import Counter from './Components/Counter';
import Counter2 from './Components/Counter2';
import UseEffect from './Components/Ese-Effect';
import Registerform from './Components/10-12/Registerform';
import UseEffect2 from './Components/8-12/UseEffect2';
import UseEffect3 from './Components/8-12/UseEffect3';
import UseEffect4 from './Components/8-12/UseEffect4';
import DynamicRouting from './Components/8-12/Dynamic-Routing';
import UseParams from './Components/8-12/UseParams';
import PropsMap from './Components/9-12/Props-Map';
import { useState } from 'react';
import MapObject from './Components/9-12/Map-Object';
import StyleComponent from './Components/9-12/StyleComponent';


function App() {

  const[myName, setMyName]=useState("Shahabaj" )

  const[player, setPlayer]=useState([{name:"Virat" ,image:"https://rukminim1.flixcart.com/image/850/1000/xif0q/sticker/b/h/e/medium-virat-kohli-rcb-wall-sticker-64x58-1-58-new-ts127-sr-original-imaggv3bbshbpmty.jpeg?q=90",number:"18"},{name:"ABD" ,number:"17" ,image:"https://images.indianexpress.com/2020/11/ABD.png?w=414" },{name:"Siraj",number:"73" ,image:"https://cricreads.com/wp-content/uploads/2023/04/19siraj.jpg"}]);

  function ChnageName(){
    setMyName("Shahabaj Kadim.")
  }
  
  

  return (
    <div className="App">
      <Navbar/>
    <Routes>
      < Route path='*' element={<Nopagefound/>}/>
      <Route path= '/' element={ <Home />}/>
      <Route path='Login' element={< Login/>} />
      <Route path='Register' element={ < Register/>} />
      <Route path='Counter' element={ < Counter/>} />
      <Route path='Counter2' element={<Counter2/>} />
      < Route path='UseEffect' element={<UseEffect/>}/>
      < Route path='registerform' element={<Registerform/>}/>
      < Route path='Use-Effect2' element={<UseEffect2/>}/>
      <Route path='Use-Effect3' element={<UseEffect3/>}/>
      <Route path='Use-Effect4' element={<UseEffect4/>} />
      <Route path='Dynamic-Routing' element={<DynamicRouting/>}/>
      <Route path='Use-params/:age' element={<UseParams/>} />
      <Route path='props-map' element={<PropsMap Name={myName} myAge="25" changeName={ChnageName} myStudent={["Devesh","Rushabh","Krush","amit","yallapa","Dhanu","Nishat"]} />}/>
      <Route path='map-object' element={< MapObject myStudentData={player}/>}/>
      <Route path='style-component' element={<StyleComponent/>}/>
      {/* <Route/> */}

    </Routes>
    < Footer/>
    </div>
  );
}

export default App;