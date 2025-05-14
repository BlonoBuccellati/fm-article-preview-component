"use client";
import Image from "next/image";
import { useState } from "react";

import { iconShare } from "@/assets";
import { avatar } from "@/assets";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";

import ShareContent from "./share-content";

const UserInfo = () => {
  return (
    <div className="flex items-center space-x-200">
      <CardAvatar />
      <div>
        <div className="typo-2-bold text-gray-900">Michelle Appleton</div>
        <div className="typo-2-medium text-gray-400">28 Jun 2020</div>
      </div>
    </div>
  );
};

const CardAvatar = () => {
  return (
    <Avatar className="max-w-500">
      <AvatarImage src={avatar.src} alt="user" />
      <AvatarFallback>USER</AvatarFallback>
    </Avatar>
  );
};

const UserProfile = () => {
  const [open, setOpen] = useState(false);
  return (
    <div className="relative flex items-center justify-between px-400 pb-300">
      <UserInfo />
      <button
        onClick={() => setOpen((prev) => !prev)}
        className="z-10 min-h-400 min-w-400 rounded-full bg-gray-200"
      >
        <Image src={iconShare} alt="share icons" className="mx-auto" />
      </button>
      {open && (
        // bottom-0, left-0で固定
        <ShareContent className="absolute bottom-0 left-0 w-full rounded-b-lg p-400" />
      )}
    </div>
  );
};

export default UserProfile;
