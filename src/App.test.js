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
})
