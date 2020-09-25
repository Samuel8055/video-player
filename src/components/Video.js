import React, { useContext } from "react";
import ReactPlayer from "react-player";
import { ContextData } from "../Context";

const Video = () => {
  const { video, removeVideo } = useContext(ContextData);

  return (
    <div className=' video-section'>
      <ReactPlayer
        url={video.url}
        controls
        autoPlay
        onEnded={() => removeVideo(video.id)}
        className='video-player'
      />
    </div>
  );
};

export default Video;
