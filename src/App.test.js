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

test('renders the additional example videos', () => {
  render(<App />);
  expect(
    screen.getByText('Understanding TypeScript Generics')
  ).toBeInTheDocument();
  expect(
    screen.getByText('Machine Learning Basics with TensorFlow')
  ).toBeInTheDocument();
  expect(screen.getByText('AI Academy')).toBeInTheDocument();
});

test('renders more than six example videos on the home page', () => {
  render(<App />);
  const videoTitles = [
    'Building a YouTube Clone with React',
    'Top 10 JavaScript Tips You Should Know',
    'Relaxing Lo-Fi Beats to Study To',
    'CSS Grid vs Flexbox: Which One Wins?',
    'A Day in the Life of a Software Engineer',
    'Learn React Hooks in 20 Minutes',
    'Understanding TypeScript Generics',
    'Building REST APIs with Node.js',
    'Python for Data Science Crash Course',
    'Docker Explained in 10 Minutes',
    'UI Design Trends for 2026',
    'Machine Learning Basics with TensorFlow',
    'Advanced React Patterns for 2026',
    'Kubernetes for Beginners',
    'Mastering Git and GitHub Workflows',
    'Web Performance Optimization Techniques',
  ];
  videoTitles.forEach((title) => {
    expect(screen.getByText(title)).toBeInTheDocument();
  });
  expect(videoTitles.length).toBeGreaterThan(6);
});

test('renders the newly added example videos', () => {
  render(<App />);
  expect(
    screen.getByText('Advanced React Patterns for 2026')
  ).toBeInTheDocument();
  expect(screen.getByText('Kubernetes for Beginners')).toBeInTheDocument();
  expect(
    screen.getByText('Mastering Git and GitHub Workflows')
  ).toBeInTheDocument();
  expect(
    screen.getByText('Web Performance Optimization Techniques')
  ).toBeInTheDocument();
  expect(screen.getByText('Cloud Native')).toBeInTheDocument();
});

test('renders the profile info module in the sidebar', () => {
  render(<App />);
  expect(screen.getByText('Your Name')).toBeInTheDocument();
  expect(screen.getByText('@yourchannel')).toBeInTheDocument();
  expect(screen.getByText('1.2K subscribers')).toBeInTheDocument();
});
