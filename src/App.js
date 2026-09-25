import './App.css';

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
  {
    id: 7,
    title: 'Understanding TypeScript Generics',
    channel: 'TypeScript Daily',
    views: '392K views',
    uploaded: '6 days ago',
    duration: '14:52',
    thumbnail: 'https://picsum.photos/seed/yt7/320/180',
  },
  {
    id: 8,
    title: 'Building REST APIs with Node.js',
    channel: 'Backend Basics',
    views: '1.1M views',
    uploaded: '2 weeks ago',
    duration: '18:30',
    thumbnail: 'https://picsum.photos/seed/yt8/320/180',
  },
  {
    id: 9,
    title: 'Python for Data Science Crash Course',
    channel: 'Data Camp',
    views: '2.7M views',
    uploaded: '3 weeks ago',
    duration: '45:12',
    thumbnail: 'https://picsum.photos/seed/yt9/320/180',
  },
  {
    id: 10,
    title: 'Docker Explained in 10 Minutes',
    channel: 'DevOps Simplified',
    views: '934K views',
    uploaded: '1 week ago',
    duration: '10:00',
    thumbnail: 'https://picsum.photos/seed/yt10/320/180',
  },
  {
    id: 11,
    title: 'UI Design Trends for 2026',
    channel: 'Design Weekly',
    views: '456K views',
    uploaded: '5 days ago',
    duration: '11:24',
    thumbnail: 'https://picsum.photos/seed/yt11/320/180',
  },
  {
    id: 12,
    title: 'Machine Learning Basics with TensorFlow',
    channel: 'AI Academy',
    views: '1.8M views',
    uploaded: '1 month ago',
    duration: '32:47',
    thumbnail: 'https://picsum.photos/seed/yt12/320/180',
  },
  {
    id: 13,
    title: 'Advanced React Patterns for 2026',
    channel: 'React Weekly',
    views: '723K views',
    uploaded: '2 days ago',
    duration: '16:38',
    thumbnail: 'https://picsum.photos/seed/yt13/320/180',
  },
  {
    id: 14,
    title: 'Kubernetes for Beginners',
    channel: 'Cloud Native',
    views: '1.5M views',
    uploaded: '4 weeks ago',
    duration: '22:15',
    thumbnail: 'https://picsum.photos/seed/yt14/320/180',
  },
  {
    id: 15,
    title: 'Mastering Git and GitHub Workflows',
    channel: 'Dev Simplified',
    views: '689K views',
    uploaded: '1 week ago',
    duration: '13:42',
    thumbnail: 'https://picsum.photos/seed/yt15/320/180',
  },
  {
    id: 16,
    title: 'Web Performance Optimization Techniques',
    channel: 'Frontend Masters',
    views: '412K views',
    uploaded: '6 days ago',
    duration: '19:05',
    thumbnail: 'https://picsum.photos/seed/yt16/320/180',
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
                  item === 'Home'
                    ? 'YouTube-Sidebar-Item YouTube-Sidebar-Item-Active'
                    : 'YouTube-Sidebar-Item'
                }
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
        </main>
      </div>
    </div>
  );
}

export default App;
