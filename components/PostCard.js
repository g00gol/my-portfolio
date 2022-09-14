import { useState, useEffect } from "react";

const PostCard = ({ post }) => {
  const [content, setContent] = useState("");

  function limitContent() {
    const numberOfWords = 10;
    var array = post.content.match();
    console.log("array", array);
    setContent(array.slice(0, numberOfWords));
  }

  useEffect(() => {
    limitContent();
    console.log(content);
  }, []);

  return (
    <div>
      {console.log(content)}
      <h1 className="bg-gradient-to-r from-linear1 via-linear2 to-linear3 bg-clip-text text-transparent text-xl font-playfair font-bold">
        {post.title}
      </h1>
      <h1 className="font-quicksand text-lg">
        {content}{" "}
        <a href="" className="font-quicksand text-lg underline">
          keep reading
        </a>
      </h1>
    </div>
  );
};

export default PostCard;
