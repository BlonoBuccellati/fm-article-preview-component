import { avatar } from "@/assets";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";

const CardAvatar = () => {
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
}
const UserProfile = ({ userName, articleDate }: UserProfileProps) => {
  return (
    <div className="flex items-center space-x-200">
      <CardAvatar />
      <div>
        <div className="typo-2-bold text-gray-900">{userName}</div>
        <div className="typo-2-medium text-gray-400">{articleDate}</div>
      </div>
    </div>
  );
};

export default UserProfile;
