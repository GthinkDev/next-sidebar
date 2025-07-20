"use client";

import type { FC } from "react";
import React, { memo } from "react";
import { Button } from "@/components/ui/button";

interface IProps {
  children?: React.ReactNode;
  onClick?: () => void;
}
const Buttons: FC<IProps> = (props) => {
  const { children, onClick } = props;
  return (
    <Button variant={"outline"} size={"lg"} onClick={onClick}>
      {children}
    </Button>
  );
};

export default memo(Buttons);
