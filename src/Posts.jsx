import { use } from "react";
import Post from "./Post";

export default function Posts({ postPromise }) {
  const posts = use(postPromise);
  //   console.log(posts);
  return (
    <div>
      <h2 className="text-center">All Post are here: {posts.length}</h2>
      {/* 
        1. Looping Posts to get single post
        2. Inside of the Posts mapping we'll get single post and we'll call the <Post></Post> component and pass the data and set a key.
        
        */}
      {posts.map((post) => (
        <Post key={post.id} post={post}></Post>
      ))}
    </div>
  );
}
