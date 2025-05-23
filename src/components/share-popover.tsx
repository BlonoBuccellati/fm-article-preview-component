import { IconFacebook, IconPinterest, IconTwitter } from "@/assets";
import { cn } from "@/lib/utils";

const SharePopover = ({ className }: { className?: string }) => {
  return (
    <div
      className={cn(
        "tablet:rounded-xl tablet:py-200 relative flex items-center space-x-200 bg-gray-900 p-400",
        className,
      )}
    >
      <div className="typo-3-overline text-gray-400 uppercase">share</div>
      <a href="#">
        <IconFacebook role="img" aria-label="facebook icon" />
      </a>
      <a href="#">
        <IconTwitter role="img" aria-label="twitter icon" />
      </a>
      <a href="#">
        <IconPinterest role="img" aria-label="pinterest icon" />
      </a>
      <div className="triangle tablet:block absolute -bottom-[14px] left-1/2 mx-auto hidden h-200 w-200 -translate-x-1/2" />
    </div>
  );
};

export default SharePopover;
