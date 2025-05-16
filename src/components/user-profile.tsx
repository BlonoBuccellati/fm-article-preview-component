import { StaticImageData } from "next/image";

import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";

const CardAvatar = ({ avatar }: { avatar: StaticImageData }) => {
  return (
    <Avatar className="max-w-500">
      <AvatarImage src={avatar.src} alt="user" />
      <AvatarFallback>USER</AvatarFallback>
    </Avatar>
  );
};

interface UserProfileProps {
  userName: string;
  articleDate: string;
  avatar: StaticImageData;
}
const UserProfile = ({ userName, articleDate, avatar }: UserProfileProps) => {
  return (
    <div className="flex items-center space-x-200">
      <CardAvatar avatar={avatar} />
      <div>
        <div className="typo-2-bold text-gray-900">{userName}</div>
        <div className="typo-2-medium text-gray-400">{articleDate}</div>
      </div>
    </div>
  );
};

export default UserProfile;
