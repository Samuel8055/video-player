import React, { useContext } from "react";
import { ContextData } from "../Context";

const PlaylistVideo = ({ id, url }) => {
  const { clickHandler, removeVideo } = useContext(ContextData);

  return (
    <div
      key={id}
      className='playlist-video d-flex justify-content-space-between'
    >
      {" "}
      <div className='playlist-link' onClick={() => clickHandler(id)}>
        <span className='link-text'>Link: </span>
        <span>{url}</span>
      </div>
      <div>
        <span className='delete-btn' onClick={() => removeVideo(id)}>
          x
        </span>
      </div>
    </div>
  );
};

export default PlaylistVideo;
