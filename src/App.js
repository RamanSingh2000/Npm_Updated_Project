
import './App.css';
import Navbar from './Navbar';
import Content from './Content';
import { useState } from 'react';
import React from 'react';
import About from './About';
import { BrowserRouter, Routes, Route } from "react-router-dom";
function App() {
 
  const [clss,setClss] = useState("");
  const removebodyclasses=()=>{

    document.body.classList.remove("bg-primary");
    document.body.classList.remove("bg-secondary");
    document.body.classList.remove("bg-success");
    document.body.classList.remove("bg-danger");
    document.body.classList.remove("bg-light");
    document.body.classList.remove("bg-dark");

 }

  const togglemode=(cls) => {
      setClss(cls);
      console.log("c in toggle: ",clss)
   removebodyclasses();
    document.body.classList.add('bg-'+cls);
    // document.body.style.backgroundColor='cls'

   }
 
 
  return (
    <>

    
      <Navbar togglemode={togglemode} cls={clss}/>

      
      {/* <BrowserRouter> */}
      <Routes>
      {/* <div className="container"> */}
     
     
      <Route exact path="/" element={<Content title="TextUtils" cls={clss}/>}/>
        <Route exact path="/about" element={<About />}/>

      
     
     {/* </div> */}
      
          
        
      </Routes>
    {/* </BrowserRouter> */}

    </>
  );
}

export default App;
