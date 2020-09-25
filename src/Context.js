import React, { useState, useEffect } from "react";
import { v4 as uuidv4 } from "uuid";

const ContextData = React.createContext();

const ContextProvider = (props) => {
  const [tempUrl, setTempUrl] = useState("");
  const [video, setVideo] = useState("");
  const [playlist, setPlaylist] = useState([]);

  useEffect(() => {
    if (playlist.length < 1) {
      setVideo("");
    } else if (playlist.length >= 1) {
      setVideo(playlist[0]);
    }
  }, [playlist]);

  const changeHandler = (event) => {
    setTempUrl(event.target.value);
  };

  const handleSubmit = (event) => {
    event.preventDefault();

    if (tempUrl === "") {
      alert("Please enter the video link!");
    } else {
      // Validate the URL entered by the user
      const regex = /^(?:https?:\/\/)?(?:m\.|www\.)?(?:youtu\.be\/|youtube\.com\/(?:embed\/|v\/|watch\?v=|watch\?.+&v=))((\w|-){11})(?:\S+)?$/;

      if (!tempUrl.match(regex)) {
        alert("Enter a valid youtube URL!");
        return false;
      } else {
        const videoObject = {
          id: uuidv4(),
          url: tempUrl,
        };

        setPlaylist([...playlist, videoObject]);
        setTempUrl("");
      }
    }
  };

  // Playing from the playlist
  const clickHandler = (id) => {
    const selectedVideo = playlist.find((video) => video.id === id);
    setVideo(selectedVideo);
  };

  // Removing the video from the playlist
  const removeVideo = (id) => {
    const filteredPlaylist = playlist.filter((video) => video.id !== id);
    setPlaylist(filteredPlaylist);
  };

  return (
    <ContextData.Provider
      value={{
        handleSubmit,
        changeHandler,
        tempUrl,
        video,
        playlist,
        clickHandler,
        removeVideo,
      }}
    >
      {props.children}
    </ContextData.Provider>
  );
};

export { ContextData, ContextProvider };
