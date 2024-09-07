import { Avatar } from "@nextui-org/avatar";
import React from "react";
import pfpIcon from "@/assets/images/abio.jpg";

export default function AvatarComp() {
  return (
    <div className="flex gap-4 items-center">
      <Avatar isBordered color="default" src="abio.png" />
    </div>
  );
}
