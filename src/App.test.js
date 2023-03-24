import { fireEvent, render, screen } from '@testing-library/react';
import App from './App';
import { replaceCamelWithSpaces } from './App';

test('button has correct initial color, and update when clicked', () => {
  render(<App/>);

  // find an element with a role of button and text of 'Change to MidnightBlue'
  const colorButton = screen.getByRole('button', {name: 'Change to Midnight Blue'});

  // expect the background color to be MediumVioletRed
  expect(colorButton).toHaveStyle({backgroundColor: 'MediumVioletRed'})

  // expect the background color to be MediumVioletRed
  expect(colorButton).toHaveStyle({backgroundColor: 'Medium Violet Red'});

  // click button
  fireEvent.click(colorButton);

  // exepct the background color to be MidnightBlue
  expect(colorButton).toHaveStyle({backgroundColor: 'MidnightBlue'});

  //expect the button text to be 'Change to MediumVioletRed'
  expect(colorButton).toHaveTextContent('Change to Medium Violet Red');
});

test('initial conditions, and button disabled when checkbox is click', () => {
  render(<App/>);

  // check that the button starts out enabled
  const colorButton = screen.getByRole('button', {name: 'Change to Midnight Blue'});
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
  
  const buttonColor = screen.getByRole('button', {name: 'Change to Midnight Blue'});

  const checkbox = screen.getByRole('checkbox', {name: 'Disable button'});

  // click the checkbox to disbale button
  fireEvent.click(checkbox);
  // expect button background color is gray
  expect(buttonColor).toHaveStyle({backgroundColor: 'gray'});
  // click the checkbox to re-enable button
  fireEvent.click(checkbox);
  // expect button background color to be MediumVioletRed
  expect(buttonColor).toHaveStyle({backgroundColor: 'MediumVioletRed'});

  // click button to change color to MidnightBlue
  fireEvent.click(buttonColor);
  // expect button background to be MidnightBlue
  expect(buttonColor).toHaveStyle({backgroundColor: 'MidnightBlue'});
  // click checkbox to disable button
  fireEvent.click(checkbox);
  // expect button background to be gray
  expect(buttonColor).toHaveStyle({backgroundColor: 'gray'});

  // click checkbox to enable button
  fireEvent.click(checkbox);
  // expect button background to be MidnightBlue
  expect(buttonColor).toHaveStyle({backgroundColor: 'MidnightBlue'});

});

describe('spaces before camel-case capital letters', () => {
  test('Works for no inner capital letters', () => {
    expect(replaceCamelWithSpaces('Red')).toBe('Red');
  });
  test('Works for one inner capital letter', () => {
    expect(replaceCamelWithSpaces('MidnightBlue')).toBe('Midnight Blue');
  });
  test('Works for multiple inner capital letters', () => {
    expect(replaceCamelWithSpaces('MediumVioletRed')).toBe('Medium Violet Red');
  });
})
