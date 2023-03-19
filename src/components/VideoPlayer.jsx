import React, { useEffect, useState } from 'react';
import Hls from 'hls.js';

const VideoPlayer = ({ url, courseId, previewImageLink, id, lessonsId = 0 }) => {
  const [video, setVideo] = useState(null);
  const key = `${courseId}-${lessonsId}`
  console.log('key ', key)
  useEffect(() => {
    const videoEl = document.getElementById(id);
    setVideo(videoEl);

    if (Hls.isSupported()) {
      const hls = new Hls();
      hls.loadSource(url);
      hls.attachMedia(videoEl);

      hls.on(Hls.Events.MANIFEST_PARSED, () => {
        const keyProgress = key;
        const previousProgress = localStorage.getItem(keyProgress);
        if (previousProgress) {
          videoEl.currentTime = parseFloat(previousProgress);
        }
        videoEl.pause()
      });


    } else if (videoEl.canPlayType('application/vnd.apple.mpegurl')) {
      videoEl.src = url;
      videoEl.addEventListener('webkitpresentationmodechanged', function (e) {
        if (videoEl.webkitPresentationMode === 'fullscreen') {
          videoEl.webkitExitFullscreen();
        }
      });

      const keyProgress = key;
      const previousProgress = localStorage.getItem(keyProgress);
      if (previousProgress) {
        videoEl.currentTime = parseFloat(previousProgress);
      }

      videoEl.play();

    }
  }, [url, courseId]);

  const handleVideoTimeUpdate = () => {
    const keyProgress = key;
    if (video && video?.currentTime)
      localStorage.setItem(keyProgress, video.currentTime.toString());
  };
  return (
    <video id={id}
      poster={previewImageLink} width="50%"
      muted onTimeUpdate={handleVideoTimeUpdate} controls />
  );
};


export default VideoPlayer;