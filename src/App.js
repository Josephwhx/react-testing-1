import { useState } from 'react';
import './App.css';

export function replaceCamelWithSpaces(colorName){
  return colorName.replace(/\B([A-Z])\B/g, ' $1');
}

function App() {

  const [buttonColor, setButtonColor] = useState('MediumVioletRed')
  const [disabled, setDisabled] = useState(false);

  const newButtonColor = buttonColor === 'MediumVioletRed' ? 'MidnightBlue' : 'MediumVioletRed';

  const changeButtonColor = () => {
    (newButtonColor === 'MediumVioletRed' ? setButtonColor('MediumVioletRed') : setButtonColor('MidnightBlue'));
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
      >Change to {replaceCamelWithSpaces(newButtonColor)}</button>

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
