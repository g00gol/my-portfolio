import { AiOutlineArrowRight } from "react-icons/ai";

import PostCard from "../components/PostCard";

export default function Blog({ posts }) {
  // console.log("Posts", posts);
  // console.log("Posts", posts[0].node.title);

  const postCards = [];
  for (let i = 0; i < posts.length; ++i) {
    postCards.push(<PostCard key={i} post={posts[i].node} />);
  }

  return (
    <div className="relative flex h-full w-9/12 lg:w-11/12 mx-auto lg:justify-center">
      <div className="space-y-20 w-full">
        <h1 className="text-3xl font-playfair font-bold">latest posts</h1>
        <div className="space-y-12">{postCards}</div>
        <div>
          <a
            href="#"
            className="text-xl font-quicksand underline flex items-center"
          >
            all posts <AiOutlineArrowRight />
          </a>
        </div>
      </div>
    </div>
  );
}
