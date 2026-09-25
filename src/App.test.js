import { render, screen } from '@testing-library/react';
import App from './App';

test('exports the App component', () => {
  expect(App).toBeDefined();
});

test('renders YouTube home content', () => {
  render(<App />);
  const homeContent = screen.getByText(/YouTube Home Page/);
  expect(homeContent).toBeInTheDocument();
});
