import Image from "next/image";

import { drawers } from "@/assets";

import UserProfile from "./user-profile";

const TextContents = () => {
  return (
    <div className="space-y-300 px-400 pt-400">
      <h1 className="typo-1 text-gray-900">
        Shift the overall look and feel by adding these wonderful touches to
        furniture in your home
      </h1>
      <p className="typo-2-medium text-gray-500">
        Ever been in a room and felt like something was missing? Perhaps it felt
        slightly bare and uninviting. I’ve got some simple tips to help you make
        any room feel complete.
      </p>
    </div>
  );
};
const UserCard = () => {
  return (
    <section className="mx-auto max-w-5/6 rounded-[10px] bg-white">
      {/* heroImage */}
      <Image alt="image" src={drawers} className="rounded-t-[10px]" />
      <div className="space-y-600">
        <TextContents />
        {/* avatar */}
        <UserProfile />
      </div>
    </section>
  );
};

export default UserCard;
