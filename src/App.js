import { useState } from 'react';
import './App.css';

function App() {

  const [buttonColor, setButtonColor] = useState('red')

  const newButtonColor = buttonColor === 'red' ? 'blue' : 'red';

  const changeButtonColor = () => {
    (newButtonColor === 'red' ? setButtonColor('red') : setButtonColor('blue'));
  }
  
  return (
    <div>
      <button 
      style={{backgroundColor: buttonColor}}
      onClick={changeButtonColor}
      >Change to {newButtonColor}</button>
    </div>
  );
}

export default App;
