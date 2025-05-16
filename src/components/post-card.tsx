"use client";

import Image from "next/image";
import { useState } from "react";

import { drawers } from "@/assets";
import { SharePopover, ShareButton } from "@/components/share-popover";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardTitle,
} from "@/components/ui/card";
import UserProfile from "@/components/user-profile";
import ArticleProps from "@/types/article";

const PostCard = ({ article }: { article: ArticleProps }) => {
  const [open, setOpen] = useState(false);
  return (
    <Card className="tablet:flex mx-auto max-w-5/6">
      {/* heroImage */}
      <Image
        alt="hero image"
        src={drawers}
        className="tablet:rounded-t-none tablet:rounded-l-[10px] tablet:max-w-[229px] rounded-t-[10px]"
      />
      <div className="space-y-600">
        <CardContent className="space-y-300">
          <CardTitle>{article.title}</CardTitle>
          <CardDescription>{article.description}</CardDescription>
        </CardContent>
        <CardFooter className="relative flex items-center justify-between px-400 pb-300">
          <UserProfile userName={article.userName} articleDate={article.date} />
          {/* share button とpopover*/}
          <ShareButton open={open} onClick={() => setOpen((prev) => !prev)} />
          {open && (
            // bottom-0, left-0で固定
            <SharePopover className="tablet:left-[55%] tablet:w-max tablet:bottom-[130%] absolute bottom-0 left-0 w-full rounded-b-lg" />
          )}
        </CardFooter>
      </div>
    </Card>
  );
};

export default PostCard;
