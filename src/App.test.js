import { render, screen } from '@testing-library/react';
import App from './App';

test('renders YouTube home content', () => {
  render(<App />);
  const homeContent = screen.getByText(/YouTube Home Page/);
  expect(homeContent).toBeInTheDocument();
});
