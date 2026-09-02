import React from "react";
import VideoCall from "../../components/features/VideoCall";
import { useParams } from "react-router-dom";

const VideoCallPage = () => {
    const { userId } = useParams();
  return (
    <>
      <VideoCall userId={userId} />
    </>
  );
};

export default VideoCallPage;
