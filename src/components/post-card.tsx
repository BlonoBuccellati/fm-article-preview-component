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

const PostCardContent = ({
  title,
  description,
}: {
  title: string;
  description: string;
}) => {
  return (
    <CardContent className="space-y-300">
      <CardTitle>{title}</CardTitle>
      <CardDescription>{description}</CardDescription>
    </CardContent>
  );
};
const PostCardFooter = ({ article }: { article: ArticleProps }) => {
  const [open, setOpen] = useState(false);
  const togglePopover = () => setOpen((prev) => !prev);
  return (
    <CardFooter className="relative flex items-center justify-between px-400 pb-300">
      <UserProfile
        userName={article.userName}
        articleDate={article.date}
        avatar={article.userAvatar}
      />
      {/* share button とpopover*/}
      <ShareButton open={open} onClick={togglePopover} />
      {open && (
        // bottom-0, left-0で固定
        <SharePopover className="tablet:left-[55%] tablet:w-max tablet:bottom-[130%] absolute bottom-0 left-0 w-full rounded-b-lg" />
      )}
    </CardFooter>
  );
};

const PostCard = ({ article }: { article: ArticleProps }) => {
  return (
    <Card className="tablet:flex tablet:max-w-[clamp(38rem,29.286rem+18.15vw,45.625rem)] mx-auto max-w-5/6 [box-shadow:0px_40px_40px_-10px_rgba(201,213,225,0.5)]">
      {/* heroImage */}
      <Image
        alt="hero image"
        src={drawers}
        className="tablet:rounded-t-none tablet:rounded-l-[10px] tablet:max-w-[clamp(14.313rem,10.67rem+7.59vw,17.5rem)] tablet:max-h-none tablet:object-fill max-h-[194px] rounded-t-[10px] object-cover [object-position:50%_22%]"
      />
      <div className="space-y-600">
        <PostCardContent
          title={article.title}
          description={article.description}
        />
        <PostCardFooter article={article} />
      </div>
    </Card>
  );
};

export default PostCard;
