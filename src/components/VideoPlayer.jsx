import React, { useEffect, useState } from 'react';
import Hls from 'hls.js';

const VideoPlayer = ({ url, courseId }) => {
  const [video, setVideo] = useState(null);

  useEffect(() => {
    const videoEl = document.getElementById('video-player-course');
    setVideo(videoEl);

    if (Hls.isSupported()) {
      const hls = new Hls();
      hls.loadSource(url);
      hls.attachMedia(videoEl);

      hls.on(Hls.Events.MANIFEST_PARSED, () => {
        const keyProgress = `${courseId}`;
        const previousProgress = localStorage.getItem(keyProgress);
        if (previousProgress) {
          videoEl.currentTime = parseFloat(previousProgress);
        }

        videoEl.play();
      });
    } else if (videoEl.canPlayType('application/vnd.apple.mpegurl')) {
      videoEl.src = url;
      videoEl.addEventListener('webkitpresentationmodechanged', function(e) {
        if (videoEl.webkitPresentationMode === 'fullscreen') {
          videoEl.webkitExitFullscreen();
        }
      });

      const keyProgress = `${courseId}`;
      const previousProgress = localStorage.getItem(keyProgress);
      if (previousProgress) {
        videoEl.currentTime = parseFloat(previousProgress);
      }

      videoEl.play();
    }
  }, [url, courseId, lessonId]);

  const handleVideoTimeUpdate = () => {
    const keyProgress = `${courseId}`;
    if(video&&video?.currentTime)
    localStorage.setItem(keyProgress, video.currentTime.toString());
  };

  return (
    <video id="video-player-course" width="50%" onTimeUpdate={handleVideoTimeUpdate} mute controls/>
  );
};

export default VideoPlayer;