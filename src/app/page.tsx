import { avatar } from "@/assets";
import PostCard from "@/components/post-card";
import ArticleProps from "@/types/article";

const ARTICLE: ArticleProps = {
  title:
    "Shift the overall look and feel by adding these wonderful touches to furniture in your home",
  description:
    "Ever been in a room and felt like something was missing? Perhaps it felt slightly bare and uninviting. I’ve got some simple tips to help you make any room feel complete.",
  userName: "Michelle Appleton",
  date: "28 Jun 2020",
  userAvatar: avatar,
};

export default function Home() {
  return (
    <main className="flex min-h-screen items-center">
      <PostCard article={ARTICLE} />
    </main>
  );
}
