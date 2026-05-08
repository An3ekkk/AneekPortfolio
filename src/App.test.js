import { render, screen } from '@testing-library/react';
import App from './App';

test('renders portfolio loading screen', () => {
  render(<App />);
  expect(screen.getByText(/aneek/i)).toBeInTheDocument();
  expect(screen.getByText(/loading/i)).toBeInTheDocument();
});
