import { render, screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
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

test('shows the Home page by default', () => {
  render(<App />);
  expect(screen.getByText(/YouTube Home Page/)).toBeInTheDocument();
  expect(screen.getByText('Recommended')).toBeInTheDocument();
  expect(screen.queryByText('Your Videos')).not.toBeInTheDocument();
});

test('navigates to the Your Videos page when clicking the sidebar item', async () => {
  render(<App />);

  await userEvent.click(screen.getByText('Your videos'));

  expect(
    screen.getByRole('heading', { name: 'Your Videos' })
  ).toBeInTheDocument();
  expect(screen.getByRole('button', { name: 'Upload' })).toBeInTheDocument();
  expect(screen.queryByText('Recommended')).not.toBeInTheDocument();
  expect(screen.queryByText(/YouTube Home Page/)).not.toBeInTheDocument();
});

test('renders the Your Videos page tabs and video rows', async () => {
  render(<App />);

  await userEvent.click(screen.getByText('Your videos'));

  const tabLabels = ['Videos', 'Shorts', 'Live', 'Playlists'];
  tabLabels.forEach((label) => {
    const tab = screen
      .getAllByText(label)
      .find((el) => el.className.includes('YouTube-YourVideos-Tab'));
    expect(tab).toBeInTheDocument();
  });
  expect(
    screen.getByRole('button', {
      name: 'Edit Building a YouTube Clone with React',
    })
  ).toBeInTheDocument();
});

test('shows an alert when clicking the Upload button on the Your Videos page', async () => {
  const alertSpy = jest.spyOn(window, 'alert').mockImplementation(() => {});
  render(<App />);

  await userEvent.click(screen.getByText('Your videos'));
  await userEvent.click(screen.getByRole('button', { name: 'Upload' }));

  expect(alertSpy).toHaveBeenCalledWith('Upload a new video');
  alertSpy.mockRestore();
});

test('shows an alert when clicking the edit button of a video', async () => {
  const alertSpy = jest.spyOn(window, 'alert').mockImplementation(() => {});
  render(<App />);

  await userEvent.click(screen.getByText('Your videos'));
  await userEvent.click(
    screen.getByRole('button', {
      name: 'Edit Building a YouTube Clone with React',
    })
  );

  expect(alertSpy).toHaveBeenCalledWith(
    'Edit: Building a YouTube Clone with React'
  );
  alertSpy.mockRestore();
});

test('returns to the Home page when clicking the Home sidebar item', async () => {
  render(<App />);

  await userEvent.click(screen.getByText('Your videos'));
  expect(screen.getByText('Your Videos')).toBeInTheDocument();

  await userEvent.click(screen.getByText('Home'));
  expect(screen.getByText(/YouTube Home Page/)).toBeInTheDocument();
  expect(screen.getByText('Recommended')).toBeInTheDocument();
  expect(screen.queryByText('Your Videos')).not.toBeInTheDocument();
});

test('activates the Videos tab by default and shows video rows', async () => {
  render(<App />);

  await userEvent.click(screen.getByText('Your videos'));

  const videosTab = screen
    .getAllByText('Videos')
    .find((el) => el.className.includes('YouTube-YourVideos-Tab'));
  expect(videosTab.className).toContain('YouTube-YourVideos-Tab-Active');
  expect(
    screen.getByText('Building a YouTube Clone with React')
  ).toBeInTheDocument();
  expect(
    screen.getByRole('button', {
      name: 'Edit Building a YouTube Clone with React',
    })
  ).toBeInTheDocument();
});

test('switches to the Shorts tab and renders Shorts data', async () => {
  render(<App />);

  await userEvent.click(screen.getByText('Your videos'));

  const tabs = screen.getAllByText('Shorts');
  const shortsTab = tabs.find((el) =>
    el.className.includes('YouTube-YourVideos-Tab')
  );
  await userEvent.click(shortsTab);

  expect(shortsTab.className).toContain('YouTube-YourVideos-Tab-Active');
  expect(
    screen
      .getAllByText('Videos')
      .find((el) => el.className.includes('YouTube-YourVideos-Tab')).className
  ).not.toContain('YouTube-YourVideos-Tab-Active');
  expect(screen.getByText('React Hooks in 60 Seconds')).toBeInTheDocument();
  expect(screen.getByText('CSS Grid Quick Tip')).toBeInTheDocument();
  expect(screen.getByText('JavaScript Array Tricks')).toBeInTheDocument();
  expect(
    screen.queryByText('Building a YouTube Clone with React')
  ).not.toBeInTheDocument();
});

test('switches to the Live tab and renders Live data', async () => {
  render(<App />);

  await userEvent.click(screen.getByText('Your videos'));

  const liveTabs = screen.getAllByText('Live');
  const liveTab = liveTabs.find((el) =>
    el.className.includes('YouTube-YourVideos-Tab')
  );
  await userEvent.click(liveTab);

  expect(liveTab.className).toContain('YouTube-YourVideos-Tab-Active');
  expect(
    screen
      .getAllByText('Shorts')
      .find((el) => el.className.includes('YouTube-YourVideos-Tab')).className
  ).not.toContain('YouTube-YourVideos-Tab-Active');
  expect(
    screen.getByText('Live Coding: Building a YouTube Clone')
  ).toBeInTheDocument();
  expect(screen.getByText('Q&A with the Dev Team')).toBeInTheDocument();
  expect(
    screen.queryByText('Building a YouTube Clone with React')
  ).not.toBeInTheDocument();
});

test('switches to the Playlists tab and renders Playlists data', async () => {
  render(<App />);

  await userEvent.click(screen.getByText('Your videos'));

  const playlistsTabs = screen.getAllByText('Playlists');
  const playlistsTab = playlistsTabs.find((el) =>
    el.className.includes('YouTube-YourVideos-Tab')
  );
  await userEvent.click(playlistsTab);

  expect(playlistsTab.className).toContain('YouTube-YourVideos-Tab-Active');
  expect(
    screen
      .getAllByText('Live')
      .find((el) => el.className.includes('YouTube-YourVideos-Tab')).className
  ).not.toContain('YouTube-YourVideos-Tab-Active');
  expect(screen.getByText('React Tutorials')).toBeInTheDocument();
  expect(screen.getByText('Frontend Interview Prep')).toBeInTheDocument();
  expect(screen.getByText('CSS Mastery')).toBeInTheDocument();
  expect(
    screen.queryByText('Building a YouTube Clone with React')
  ).not.toBeInTheDocument();
});

test('keeps the Upload alert working after switching tabs', async () => {
  const alertSpy = jest.spyOn(window, 'alert').mockImplementation(() => {});
  render(<App />);

  await userEvent.click(screen.getByText('Your videos'));
  await userEvent.click(
    screen
      .getAllByText('Playlists')
      .find((el) => el.className.includes('YouTube-YourVideos-Tab'))
  );
  await userEvent.click(screen.getByRole('button', { name: 'Upload' }));

  expect(alertSpy).toHaveBeenCalledWith('Upload a new video');
  alertSpy.mockRestore();
});

test('renders the Your Videos page again after navigating Home and back', async () => {
  render(<App />);

  await userEvent.click(screen.getByText('Your videos'));
  await userEvent.click(
    screen
      .getAllByText('Live')
      .find((el) => el.className.includes('YouTube-YourVideos-Tab'))
  );
  await userEvent.click(screen.getByText('Home'));
  expect(screen.getByText(/YouTube Home Page/)).toBeInTheDocument();

  await userEvent.click(screen.getByText('Your videos'));
  expect(
    screen.getByRole('heading', { name: 'Your Videos' })
  ).toBeInTheDocument();
  expect(screen.getAllByText('Videos').length).toBeGreaterThan(0);
  expect(screen.getAllByText('Shorts').length).toBeGreaterThan(0);
  expect(screen.getAllByText('Live').length).toBeGreaterThan(0);
  expect(screen.getAllByText('Playlists').length).toBeGreaterThan(0);
});

test('filters the home video grid by the search keyword', async () => {
  render(<App />);

  await userEvent.type(screen.getByPlaceholderText('Search'), 'react');

  expect(
    screen.getByText('Building a YouTube Clone with React')
  ).toBeInTheDocument();
  expect(
    screen.getByText('Learn React Hooks in 20 Minutes')
  ).toBeInTheDocument();
  expect(
    screen.queryByText('Relaxing Lo-Fi Beats to Study To')
  ).not.toBeInTheDocument();
  expect(
    screen.queryByText('CSS Grid vs Flexbox: Which One Wins?')
  ).not.toBeInTheDocument();
});

test('matches the search keyword case-insensitively', async () => {
  render(<App />);

  await userEvent.type(screen.getByPlaceholderText('Search'), 'JAVASCRIPT');

  expect(
    screen.getByText('Top 10 JavaScript Tips You Should Know')
  ).toBeInTheDocument();
  expect(
    screen.queryByText('Building a YouTube Clone with React')
  ).not.toBeInTheDocument();
});

test('restores all videos after clearing the search box', async () => {
  render(<App />);

  const searchInput = screen.getByPlaceholderText('Search');
  await userEvent.type(searchInput, 'react');
  expect(
    screen.queryByText('Relaxing Lo-Fi Beats to Study To')
  ).not.toBeInTheDocument();

  await userEvent.clear(searchInput);

  expect(
    screen.getByText('Building a YouTube Clone with React')
  ).toBeInTheDocument();
  expect(
    screen.getByText('Relaxing Lo-Fi Beats to Study To')
  ).toBeInTheDocument();
  expect(
    screen.getByText('CSS Grid vs Flexbox: Which One Wins?')
  ).toBeInTheDocument();
  expect(
    screen.getByText('A Day in the Life of a Software Engineer')
  ).toBeInTheDocument();
});

test('renders an empty video grid when no title matches the search', async () => {
  render(<App />);

  await userEvent.type(
    screen.getByPlaceholderText('Search'),
    'zzz-no-such-video'
  );

  expect(
    screen.queryByText('Building a YouTube Clone with React')
  ).not.toBeInTheDocument();
  expect(
    screen.queryByText('Top 10 JavaScript Tips You Should Know')
  ).not.toBeInTheDocument();
  expect(screen.getByText('Recommended')).toBeInTheDocument();
  expect(screen.getByText(/YouTube Home Page/)).toBeInTheDocument();
});

test('keeps the Your Videos page unaffected by the search keyword', async () => {
  render(<App />);

  await userEvent.type(
    screen.getByPlaceholderText('Search'),
    'zzz-no-such-video'
  );
  await userEvent.click(screen.getByText('Your videos'));

  expect(
    screen.getByRole('heading', { name: 'Your Videos' })
  ).toBeInTheDocument();
  expect(
    screen.getByRole('button', {
      name: 'Edit Building a YouTube Clone with React',
    })
  ).toBeInTheDocument();
});

