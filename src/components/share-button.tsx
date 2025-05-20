import { IconShare } from "@/assets";
import { cn } from "@/lib/utils";

interface ShareButtonProps {
  onClick: React.MouseEventHandler<HTMLButtonElement>;
  open: boolean;
  className: string;
}
const ShareButton = ({ onClick, open, className }: ShareButtonProps) => {
  return (
    <button
      onClick={onClick}
      className={cn(
        "min-h-400 min-w-400 rounded-full bg-gray-200",
        className,
        open && "bg-gray-500",
      )}
    >
      <IconShare
        className={cn("mx-auto", open ? "text-white" : "text-gray-500")}
        aria-label="share icon"
        role="img"
      />
    </button>
  );
};
export default ShareButton;
