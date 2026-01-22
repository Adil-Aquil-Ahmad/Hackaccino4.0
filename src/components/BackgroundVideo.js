import Hls from "hls.js";
import { useEffect, useRef, useState } from "react";

const BackgroundVideo = () => {
  const forwardRef = useRef(null);
  const reverseRef = useRef(null);
  const [isReverse, setIsReverse] = useState(false);

  useEffect(() => {
    const forward = forwardRef.current;
    const reverse = reverseRef.current;

    const setupHLS = (video, src) => {
      if (video.canPlayType("application/vnd.apple.mpegurl")) {
        video.src = src;
      } else if (Hls.isSupported()) {
        const hls = new Hls({
          lowLatencyMode: true,
          backBufferLength: 90,
        });
        hls.loadSource(src);
        hls.attachMedia(video);
      }
    };

    setupHLS(forward, "/video/forward/index.m3u8");
    setupHLS(reverse, "/video/reverse/index.m3u8");

    const playVideo = (video) => {
      const playPromise = video.play();
      if (playPromise !== undefined) {
        playPromise.catch((error) => {
          if (error.name !== 'AbortError') {
            console.error('Video play error:', error);
          }
        });
      }
    };

    forward.addEventListener('canplay', () => {
      playVideo(forward);
    }, { once: true });

    const showReverseSafely = () => {
      reverse.currentTime = 0;
      playVideo(reverse);

      const reveal = () => {
        setIsReverse(true);
      };

      if ("requestVideoFrameCallback" in reverse) {
        reverse.requestVideoFrameCallback(reveal);
      } else {
        reverse.addEventListener("timeupdate", reveal, { once: true });
      }
    };

    const showForwardSafely = () => {
      forward.currentTime = 0;
      playVideo(forward);

      const reveal = () => {
        setIsReverse(false);
      };

      if ("requestVideoFrameCallback" in forward) {
        forward.requestVideoFrameCallback(reveal);
      } else {
        forward.addEventListener("timeupdate", reveal, { once: true });
      }
    };

    forward.addEventListener("ended", showReverseSafely);
    reverse.addEventListener("ended", showForwardSafely);

    return () => {
      forward.removeEventListener("ended", showReverseSafely);
      reverse.removeEventListener("ended", showForwardSafely);
    };
  }, []);

  return (
    <div className="video-section">
      <video
        ref={forwardRef}
        className={`background-video ${!isReverse ? "visible" : ""}`}
        muted
        playsInline
      />
      <video
        ref={reverseRef}
        className={`background-video ${isReverse ? "visible" : ""}`}
        muted
        playsInline
      />
      <div className="video-overlay"></div>
    </div>
  );
};

export default BackgroundVideo;
