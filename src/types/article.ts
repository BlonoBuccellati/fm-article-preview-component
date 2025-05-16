import { StaticImageData } from "next/image";

interface ArticleProps {
  title: string;
  description: string;
  userName: string;
  date: string;
  userAvatar: StaticImageData;
}
export default ArticleProps;
