import type { FC } from "react";
import React, { memo } from "react";
import DeCard from "./Card";

const PropsPage: FC = () => {
  return (
    <div className="px-4 lg:px-6">
      <h1 className="text-4xl font-bold">This is the Props page</h1>
      <DeCard
        title={"点我"}
        size={"small"}
        src={
          "https://huaban.com/pins/5687048813?modalImg=https%3A%2F%2Fgd-hbimg.huaban.com%2Fda14d1a9c50632b361f8cbe77745c8c7562f030a13418da-sX7N47"
        }
        alt={"missing image"}
      />
    </div>
  );
};

export default memo(PropsPage);
