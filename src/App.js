import './App.css';
import Info from './info';

function App() {
  return (
    <div className='main'>
      <div className='info'>
        <div className='title'>Title
        <span>theme</span></div>

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
