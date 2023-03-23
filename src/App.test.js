import { render, screen } from '@testing-library/react';
import App from './App';

test('button has correct initial color', () => {
  render(<App/>);
  screen.getByRole('button', {name: 'Change to blue'});
});
test('button has correct initial text', () => {

});
test('button tunrs blue when clicked', () => {

});
