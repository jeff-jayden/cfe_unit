function YourVideos({ videos }) {
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
        <span className="YouTube-YourVideos-Tab YouTube-YourVideos-Tab-Active">
          Videos
        </span>
        <span className="YouTube-YourVideos-Tab">Shorts</span>
        <span className="YouTube-YourVideos-Tab">Live</span>
        <span className="YouTube-YourVideos-Tab">Playlists</span>
      </div>
      <div className="YouTube-YourVideos-List">
        {videos.map((video) => (
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
      </div>
    </div>
  );
}

export default YourVideos;
