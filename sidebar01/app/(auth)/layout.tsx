import type { FC } from "react";
import React, { memo } from "react";

interface IProps {
  children: React.ReactNode;
}

const layout: FC<IProps> = (props) => {
  const { children } = props;
  return <>{children}</>;
};

export default memo(layout);
