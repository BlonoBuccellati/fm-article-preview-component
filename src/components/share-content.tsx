import Image from "next/image";

import { iconFeedback, iconPinterest, iconTwitter } from "@/assets";
import { cn } from "@/lib/utils";

const ShareContent = ({ className }: { className?: string }) => {
  return (
    <div className={cn("flex items-center space-x-200 bg-gray-900", className)}>
      <div className="typo-3-overline text-gray-400 uppercase">share</div>
      <a href="#">
        <Image alt="facebook icon" src={iconFeedback} />
      </a>
      <a href="#">
        <Image alt="twitter icon" src={iconTwitter} />
      </a>
      <a href="#">
        <Image alt="pinterest icon" src={iconPinterest} />
      </a>
    </div>
  );
};

export default ShareContent;
