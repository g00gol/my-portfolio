import PostCard from "../components/PostCard";

export default function Blog({ posts }) {
  // console.log("Posts", posts);
  // console.log("Posts", posts[0].node.title);

  const postCards = [];
  for (let i = 0; i < posts.length; ++i) {
    postCards.push(<PostCard key={i} post={posts[i].node} />);
  }

  return (
    <div className="relative flex flex-col h-screen w-11/12">{postCards}</div>
  );
}
