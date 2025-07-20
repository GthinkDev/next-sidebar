"use client";

import type { FC } from "react";
import React, { memo } from "react";
import Button from "./Button";

const UploadButton: FC = () => {
  return (
    <Button onClick={() => alert("Upload button clicked")}>上传图片</Button>
  );
};

export default memo(UploadButton);
