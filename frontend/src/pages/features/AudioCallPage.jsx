import React from "react";
import AudioCall from "../../components/features/AudioCall";
import { useParams } from "react-router-dom";

const AudioCallPage = () => {
  const { userId } = useParams();
  return (
    <>
      <AudioCall userId={userId} />
    </>
  );
};

export default AudioCallPage;
