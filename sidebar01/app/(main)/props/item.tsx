import type { FC } from "react";
import React, { memo } from "react";

const itemsElements = [
  { id: 1, name: "待付款", icon: "icon1" },
  { id: 2, name: "待付款", icon: "icon2" },
  { id: 3, name: "待付款", icon: "icon3" },
  { id: 4, name: "待付款", icon: "icon4" },
  { id: 5, name: "｜", icon: "" },
  { id: 6, name: "待付款", icon: "icon6" },
];

const Item: FC = () => {
  return (
    <div className="flex  gap-2.5  items-center self-stretch w-full">
      {itemsElements.map((item) => (
        <div
          key={item.id}
          className="text-cyan-950 gap-[10px] flex-1 justify-center items-center flex flex-col"
        >
          <div>{item.icon}</div>
          <span>{item.name}</span>
        </div>
      ))}
    </div>
  );
};

export default memo(Item);
