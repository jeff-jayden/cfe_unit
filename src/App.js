import { useState } from 'react';
import './App.css';

const shorts = [
  {
    id: 1,
    title: 'React in 60 Seconds',
    channel: 'Code Academy',
    views: '1.2M views',
    thumbnail: 'https://picsum.photos/seed/short1/360/640',
  },
  {
    id: 2,
    title: 'CSS Trick You Did Not Know',
    channel: 'Dev Simplified',
    views: '845K views',
    thumbnail: 'https://picsum.photos/seed/short2/360/640',
  },
  {
    id: 3,
    title: 'Lo-Fi Beat Break',
    channel: 'Chill Vibes',
    views: '3.4M views',
    thumbnail: 'https://picsum.photos/seed/short3/360/640',
  },
  {
    id: 4,
    title: 'Flexbox Explained Fast',
    channel: 'Web Design Weekly',
    views: '512K views',
    thumbnail: 'https://picsum.photos/seed/short4/360/640',
  },
  {
    id: 5,
    title: 'A Day as a Software Engineer',
    channel: 'Tech Diaries',
    views: '2.1M views',
    thumbnail: 'https://picsum.photos/seed/short5/360/640',
  },
  {
    id: 6,
    title: 'React Hooks in 20 Minutes',
    channel: 'Frontend Masters',
    views: '678K views',
    thumbnail: 'https://picsum.photos/seed/short6/360/640',
  },
];

const videos = [
  {
    id: 1,
    title: 'Building a YouTube Clone with React',
    channel: 'Code Academy',
    views: '1.2M views',
    uploaded: '3 days ago',
    duration: '12:45',
    thumbnail: 'https://picsum.photos/seed/yt1/320/180',
  },
  {
    id: 2,
    title: 'Top 10 JavaScript Tips You Should Know',
    channel: 'Dev Simplified',
    views: '845K views',
    uploaded: '1 week ago',
    duration: '08:21',
    thumbnail: 'https://picsum.photos/seed/yt2/320/180',
  },
  {
    id: 3,
    title: 'Relaxing Lo-Fi Beats to Study To',
    channel: 'Chill Vibes',
    views: '3.4M views',
    uploaded: '2 weeks ago',
    duration: '1:02:33',
    thumbnail: 'https://picsum.photos/seed/yt3/320/180',
  },
  {
    id: 4,
    title: 'CSS Grid vs Flexbox: Which One Wins?',
    channel: 'Web Design Weekly',
    views: '512K views',
    uploaded: '5 days ago',
    duration: '15:07',
    thumbnail: 'https://picsum.photos/seed/yt4/320/180',
  },
  {
    id: 5,
    title: 'A Day in the Life of a Software Engineer',
    channel: 'Tech Diaries',
    views: '2.1M views',
    uploaded: '1 month ago',
    duration: '10:18',
    thumbnail: 'https://picsum.photos/seed/yt5/320/180',
  },
  {
    id: 6,
    title: 'Learn React Hooks in 20 Minutes',
    channel: 'Frontend Masters',
    views: '678K views',
    uploaded: '4 days ago',
    duration: '20:00',
    thumbnail: 'https://picsum.photos/seed/yt6/320/180',
  },
];

const sidebarItems = [
  'Home',
  'Shorts',
  'Subscriptions',
  'Library',
  'History',
  'Your videos',
  'Watch later',
  'Liked videos',
];

function App() {
  const [activePage, setActivePage] = useState('Home');

  const handleSidebarItemClick = (item) => {
    setActivePage(item);
  };

  return (
    <div className="YouTube-App">
      <header className="YouTube-Header">
        <div className="YouTube-Header-Left">
          <button className="YouTube-Icon-Button" aria-label="Menu">
            ☰
          </button>
          <div className="YouTube-Logo">
            <span className="YouTube-Logo-Play">▶</span>
            <span className="YouTube-Logo-Text">YouTube</span>
          </div>
        </div>
        <div className="YouTube-Header-Center">
          <input
            className="YouTube-Search-Input"
            type="text"
            placeholder="Search"
            aria-label="Search"
          />
          <button className="YouTube-Search-Button" aria-label="Search button">
            🔍
          </button>
        </div>
        <div className="YouTube-Header-Right">
          <button className="YouTube-Icon-Button" aria-label="Create">
            ＋
          </button>
          <button className="YouTube-Icon-Button" aria-label="Apps">
            ⊞
          </button>
          <button className="YouTube-Icon-Button" aria-label="Notifications">
            🔔
          </button>
          <div className="YouTube-Avatar">U</div>
        </div>
      </header>

      <div className="YouTube-Body">
        <nav className="YouTube-Sidebar">
          <div className="YouTube-Sidebar-Items">
            {sidebarItems.map((item) => (
              <div
                key={item}
                className={
                  item === activePage
                    ? 'YouTube-Sidebar-Item YouTube-Sidebar-Item-Active'
                    : 'YouTube-Sidebar-Item'
                }
                onClick={() => handleSidebarItemClick(item)}
              >
                {item}
              </div>
            ))}
          </div>
          <div className="YouTube-Profile-Card">
            <div className="YouTube-Profile-Avatar">U</div>
            <div className="YouTube-Profile-Info">
              <p className="YouTube-Profile-Name">Your Name</p>
              <p className="YouTube-Profile-Handle">@yourchannel</p>
              <p className="YouTube-Profile-Subs">1.2K subscribers</p>
            </div>
          </div>
        </nav>

        <main className="YouTube-Home-Content">
          {activePage === 'Shorts' ? (
            <>
              <h1 className="YouTube-Home-Page-Title">YouTube Shorts</h1>
              <h1 className="YouTube-Section-Title">Shorts</h1>
              <div className="YouTube-Shorts-Grid">
                {shorts.map((short) => (
                  <div className="YouTube-Short-Card" key={short.id}>
                    <div className="YouTube-Short-Thumbnail-Wrapper">
                      <img
                        className="YouTube-Short-Thumbnail"
                        src={short.thumbnail}
                        alt={short.title}
                      />
                    </div>
                    <div className="YouTube-Short-Info">
                      <h3 className="YouTube-Short-Title">{short.title}</h3>
                      <p className="YouTube-Short-Channel">{short.channel}</p>
                      <p className="YouTube-Short-Stats">{short.views}</p>
                    </div>
                  </div>
                ))}
              </div>
            </>
          ) : (
            <>
              <h1 className="YouTube-Home-Page-Title">YouTube Home Page</h1>
              <h1 className="YouTube-Section-Title">Recommended</h1>
              <div className="YouTube-Video-Grid">
                {videos.map((video) => (
                  <div className="YouTube-Video-Card" key={video.id}>
                    <div className="YouTube-Thumbnail-Wrapper">
                      <img
                        className="YouTube-Thumbnail"
                        src={video.thumbnail}
                        alt={video.title}
                      />
                      <span className="YouTube-Duration">{video.duration}</span>
                    </div>
                    <div className="YouTube-Video-Info">
                      <div className="YouTube-Channel-Avatar">
                        {video.channel.charAt(0)}
                      </div>
                      <div className="YouTube-Video-Meta">
                        <h3 className="YouTube-Video-Title">{video.title}</h3>
                        <p className="YouTube-Video-Channel">{video.channel}</p>
                        <p className="YouTube-Video-Stats">
                          {video.views} • {video.uploaded}
                        </p>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </>
          )}
        </main>
      </div>
    </div>
  );
}

export default App;
