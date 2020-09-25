import React from "react";
import InputForm from "./InputForm";
import PlayList from "./PlayList";
import Video from "./Video";

const VideoContainer = () => {
  return (
    <div>
      <InputForm />
      <div className='video-container'>
        <Video />
        <PlayList />
      </div>
    </div>
  );
};

export default VideoContainer;
