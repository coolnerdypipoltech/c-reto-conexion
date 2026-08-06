import { render, screen } from '@testing-library/react';
import App from './App';

test('renders the home hero welcome text', () => {
  render(<App />);
  const welcomeElement = screen.getByText(/welcome/i);
  expect(welcomeElement).toBeInTheDocument();
});
