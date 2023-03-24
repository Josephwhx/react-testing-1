import { fireEvent, render, screen } from '@testing-library/react';
import App from './App';

test('button has correct initial color, and update when clicked', () => {
  render(<App/>);

  // find an element with a role of button and text of 'Change to blue'
  const colorButton = screen.getByRole('button', {name: 'Change to blue'});

  // expect the background color to be red
  expect(colorButton).toHaveStyle({backgroundColor: 'red'})

  // expect the background color to be red
  expect(colorButton).toHaveStyle({backgroundColor: 'red'});

  // click button
  fireEvent.click(colorButton);

  // exepct the background color to be blue
  expect(colorButton).toHaveStyle({backgroundColor: 'blue'});

  //expect the button text to be 'Change to red'
  expect(colorButton).toHaveTextContent('Change to red');
});

test('initial conditions, and button disabled when checkbox is click', () => {
  render(<App/>);

  // check that the button starts out enabled
  const colorButton = screen.getByRole('button', {name: 'Change to blue'});
  expect(colorButton).toBeEnabled();

  // check that the checkbox starts out unchecked
  const checkbox = screen.getByRole('checkbox', {name: 'Disable button'});
  expect(checkbox).not.toBeChecked();

  // click checkbox the 1st time
  fireEvent.click(checkbox);
  // expect button to be disbaled
  expect(colorButton).toBeDisabled();

  // click checkbox the 2nd time
  fireEvent.click(checkbox);
  // expect button to be enabled
  expect(colorButton).toBeEnabled();
});

test('button turns gray when disabled, and update color when click (when it is enabled)', () => {
  render(<App/>)
  
  const buttonColor = screen.getByRole('button', {name: 'Change to blue'});

  const checkbox = screen.getByRole('checkbox', {name: 'Disable button'});

  // click the checkbox to disbale button
  fireEvent.click(checkbox);
  // expect button background color is gray
  expect(buttonColor).toHaveStyle({backgroundColor: 'gray'});
  // click the checkbox to re-enable button
  fireEvent.click(checkbox);
  // expect button background color to be red
  expect(buttonColor).toHaveStyle({backgroundColor: 'red'});

  // click button to change color to blue
  fireEvent.click(buttonColor);
  // expect button background to be blue
  expect(buttonColor).toHaveStyle({backgroundColor: 'blue'});
  // click checkbox to disable button
  fireEvent.click(checkbox);
  // expect button background to be gray
  expect(buttonColor).toHaveStyle({backgroundColor: 'gray'});

  // click checkbox to enable button
  fireEvent.click(checkbox);
  // expect button background to be blue
  expect(buttonColor).toHaveStyle({backgroundColor: 'blue'});

});
