import type { FC } from "react";
import React, { memo } from "react";
import Image from "next/image";

interface IProps {
  title: string;
  size: "small" | "medium" | "large";
  src: string;
  alt: string;
  onClick?: () => void;
  className?: string;
  style?: React.CSSProperties;
}

const sizeMap = {
  small: "w-16 h-16",
  medium: "w-24 h-24",
  large: "w-32 h-32",
};

const DeCard: FC<IProps> = (props) => {
  const { title, size, src, alt, onClick, className, style } = props;
  return (
    <div
      className={`flex flex-col items-center justify-center ${sizeMap[size]} ${className}`}
      style={style}
      onClick={onClick}
    >
      <Image src={src} alt={alt} width={100} height={100}></Image>
      <button>{title}</button>
    </div>
  );
};

export default memo(DeCard);
