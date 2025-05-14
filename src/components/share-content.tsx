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
      <div className="tablet:block triangle absolute -bottom-[14px] left-1/2 mx-auto hidden h-200 w-200 -translate-x-1/2" />
    </div>
  );
};

export default ShareContent;
