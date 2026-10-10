import { useState } from 'react';

const TABS = ['Videos', 'Shorts', 'Live', 'Playlists'];

const SHORTS = [
  {
    id: 'short-1',
    title: 'React Hooks in 60 Seconds',
    views: '120K views',
    uploaded: '2 days ago',
  },
  {
    id: 'short-2',
    title: 'CSS Grid Quick Tip',
    views: '85K views',
    uploaded: '5 days ago',
  },
  {
    id: 'short-3',
    title: 'JavaScript Array Tricks',
    views: '210K views',
    uploaded: '1 week ago',
  },
];

const LIVE = [
  {
    id: 'live-1',
    title: 'Live Coding: Building a YouTube Clone',
    views: '1.2K watching',
    uploaded: 'Streamed 3 hours ago',
  },
  {
    id: 'live-2',
    title: 'Q&A with the Dev Team',
    views: '640 watching',
    uploaded: 'Streamed 1 day ago',
  },
];

const PLAYLISTS = [
  {
    id: 'playlist-1',
    title: 'React Tutorials',
    views: '12 videos',
    uploaded: 'Updated 2 days ago',
  },
  {
    id: 'playlist-2',
    title: 'Frontend Interview Prep',
    views: '8 videos',
    uploaded: 'Updated 1 week ago',
  },
  {
    id: 'playlist-3',
    title: 'CSS Mastery',
    views: '15 videos',
    uploaded: 'Updated 3 weeks ago',
  },
];

function YourVideos({ videos }) {
  const [activeTab, setActiveTab] = useState('Videos');

  return (
    <div className="YouTube-YourVideos-Page">
      <div className="YouTube-YourVideos-Header">
        <h1 className="YouTube-YourVideos-Title">Your Videos</h1>
        <button
          className="YouTube-Upload-Button"
          type="button"
          onClick={() => window.alert('Upload a new video')}
        >
          Upload
        </button>
      </div>
      <div className="YouTube-YourVideos-Tabs">
        {TABS.map((tab) => (
          <span
            key={tab}
            className={
              tab === activeTab
                ? 'YouTube-YourVideos-Tab YouTube-YourVideos-Tab-Active'
                : 'YouTube-YourVideos-Tab'
            }
            onClick={() => setActiveTab(tab)}
          >
            {tab}
          </span>
        ))}
      </div>
      <div className="YouTube-YourVideos-List">
        {activeTab === 'Videos' &&
          videos.map((video) => (
            <div className="YouTube-YourVideos-Row" key={video.id}>
              <div className="YouTube-YourVideos-Row-Thumb">
                <img
                  className="YouTube-Thumbnail"
                  src={video.thumbnail}
                  alt={video.title}
                />
                <span className="YouTube-Duration">{video.duration}</span>
              </div>
              <div className="YouTube-YourVideos-Row-Info">
                <h3 className="YouTube-Video-Title">{video.title}</h3>
                <p className="YouTube-Video-Stats">
                  {video.views} • {video.uploaded}
                </p>
                <p className="YouTube-Video-Channel">{video.channel}</p>
              </div>
              <div className="YouTube-YourVideos-Row-Actions">
                <button
                  className="YouTube-Icon-Button"
                  type="button"
                  aria-label={`Edit ${video.title}`}
                  onClick={() => window.alert(`Edit: ${video.title}`)}
                >
                  ✎
                </button>
                <button
                  className="YouTube-Icon-Button"
                  type="button"
                  aria-label={`More options for ${video.title}`}
                  onClick={() => window.alert(`More options: ${video.title}`)}
                >
                  ⋮
                </button>
              </div>
            </div>
          ))}
        {activeTab === 'Shorts' &&
          SHORTS.map((short) => (
            <div className="YouTube-YourVideos-Row" key={short.id}>
              <div className="YouTube-YourVideos-Row-Info">
                <h3 className="YouTube-Video-Title">{short.title}</h3>
                <p className="YouTube-Video-Stats">
                  {short.views} • {short.uploaded}
                </p>
              </div>
            </div>
          ))}
        {activeTab === 'Live' &&
          LIVE.map((live) => (
            <div className="YouTube-YourVideos-Row" key={live.id}>
              <div className="YouTube-YourVideos-Row-Info">
                <h3 className="YouTube-Video-Title">{live.title}</h3>
                <p className="YouTube-Video-Stats">
                  {live.views} • {live.uploaded}
                </p>
              </div>
            </div>
          ))}
        {activeTab === 'Playlists' &&
          PLAYLISTS.map((playlist) => (
            <div className="YouTube-YourVideos-Row" key={playlist.id}>
              <div className="YouTube-YourVideos-Row-Info">
                <h3 className="YouTube-Video-Title">{playlist.title}</h3>
                <p className="YouTube-Video-Stats">
                  {playlist.views} • {playlist.uploaded}
                </p>
              </div>
            </div>
          ))}
      </div>
    </div>
  );
}

export default YourVideos;
