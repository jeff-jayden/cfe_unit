import { render, screen } from '@testing-library/react';
import App from './App';

test('exports the App component', () => {
  expect(App).toBeDefined();
});

test('renders the YouTube header and search bar', () => {
  render(<App />);
  expect(screen.getByText('YouTube')).toBeInTheDocument();
  expect(screen.getByPlaceholderText('Search')).toBeInTheDocument();
});

test('renders the sidebar navigation items', () => {
  render(<App />);
  expect(screen.getByText('Home')).toBeInTheDocument();
  expect(screen.getByText('Subscriptions')).toBeInTheDocument();
});

test('renders the YouTube Home Page compatibility title', () => {
  render(<App />);
  expect(screen.getByText(/YouTube Home Page/)).toBeInTheDocument();
});

test('renders the recommended video grid', () => {
  render(<App />);
  expect(screen.getByText('Recommended')).toBeInTheDocument();
  expect(
    screen.getByText('Building a YouTube Clone with React')
  ).toBeInTheDocument();
  expect(screen.getByText('Code Academy')).toBeInTheDocument();
});

test('renders the profile info module in the sidebar', () => {
  render(<App />);
  expect(screen.getByText('Your Name')).toBeInTheDocument();
  expect(screen.getByText('@yourchannel')).toBeInTheDocument();
  expect(screen.getByText('1.2K subscribers')).toBeInTheDocument();
});
