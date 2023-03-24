import { useState } from 'react';
import './App.css';

function App() {

  const [buttonColor, setButtonColor] = useState('red')
  const [disabled, setDisabled] = useState(false);

  const newButtonColor = buttonColor === 'red' ? 'blue' : 'red';

  const changeButtonColor = () => {
    (newButtonColor === 'red' ? setButtonColor('red') : setButtonColor('blue'));
  }
  
  const checkBoxHandler = (event) => {
    setDisabled(event.target.checked)
  }
  
  return (
    <div>
      <button 
      style={{backgroundColor: disabled ? 'gray' : buttonColor}}
      onClick={changeButtonColor}
      disabled={disabled}
      >Change to {newButtonColor}</button>

      <input 
      type="checkbox"
      id='disable-button-checkbox'
      defaultChecked={disabled}
      onClick={checkBoxHandler}
      />
      <label htmlFor='disable-button-checkbox'>Disable button</label>
    </div>
  );
}

export default App;
