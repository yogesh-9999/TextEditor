import './App.css';
// import About from './component/About';
import Navbar from './component/Navbar';
import TextForm from './component/Textform';
import React, { useState } from 'react';
 
function App() {

  const[statee1,setstatee1]= useState('enable');
  const [mode, setMode] = useState('light'); // Whether dark mode is enabled or not

  const toggleMode = ()=>{
    if(mode === 'light'){
      setMode('dark');
      document.body.style.backgroundColor = '#042743';
      setstatee1('disable');
    }
    else{
      setMode('light');
      document.body.style.backgroundColor = 'white';
      setstatee1('Enable');
    }
  }
  return (
    <>
   
    <Navbar title="TextEditor" mode={mode} toggleMode={toggleMode} statee={statee1} />
    <div className="container my-3">
    <TextForm heading="Enter the text to analyze below" mode={mode}/>


   
    </div>

    </> 
  );
}

export default App;