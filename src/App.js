import { useState } from 'react';
import './App.css';
import Info from './info';

function App() {
  const [theme,setTheme]=useState(false);
  return (
    <div className='main'>
      <div className={`${theme ?"darktheme":"info"} `}>
        <div className='title'>Title
        <span className='theme' onClick={()=>{
          if(theme){
            setTheme(false);
          }
          if(!theme){
            setTheme(true);
          }
        }} >theme</span>
        </div>

        <Info value="First Name"></Info>
        <Info value="Last Name"></Info>
        <div className='btndiv'>
        <button className='btn'>Submit</button>

        </div>
      </div>

    </div>
  );
}

export default App;
