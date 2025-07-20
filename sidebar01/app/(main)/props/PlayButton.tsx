"use client";

import type { FC } from "react";
import React, { memo } from "react";
import Buttons from "./Button";

interface IProps {
  movieName: string;
}
const PlayButton: FC<IProps> = (props) => {
  const { movieName } = props;
  const handleClick = () => {
    alert(`Playing movie: ${movieName || "Unknown Movie"}`);
  };
  return (
    <Buttons onClick={handleClick}>
      {movieName ? `播放： ${movieName}` : "Play Movie"}
    </Buttons>
  );
};

export default memo(PlayButton);
