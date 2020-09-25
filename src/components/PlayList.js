import React, { useContext } from "react";
import { ContextData } from "../Context";
import PlaylistVideo from "./PlaylistVideo";

const PlayList = () => {
  const { playlist } = useContext(ContextData);
  return (
    <div className='playlist-section'>
      <h3 className='playlist-header'>Playlist</h3>
      {playlist.length > 0 ? (
        playlist.map(({ id, url }) => {
          return <PlaylistVideo key={id} id={id} url={url} />;
        })
      ) : (
        <p className='text-center mt-3'>Playlist is empty!</p>
      )}
    </div>
  );
};

export default PlayList;
