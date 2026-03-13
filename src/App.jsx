import { Suspense, useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "./assets/vite.svg";
import heroImg from "./assets/hero.png";
import "./App.css";
import Posts from "./Posts";

// 1. Create a component (We are creating Posts.jsx)
// 2. Now we need to load the data, so we need to go inside main component which is App.jsx for us. Inside the return() we will call it inside of <Suspense></Suspense> component. Before that we must need to import Posts.jsx to main component which is App.jsx.
// 3. Now we need to fetch the data. We will use async await.
// 4. Now we need to call the fetch function inside of APP() function, which is a promise of 'fetchPost' function. We use 'postPromise' as a variable to call the fetch function.
// 5. Now we need to send the 'postPromise' inside of the <Post></Post> which is our Post component, also we will send a props using the same name {postPromise}.
// 6. Now we need to receive the props to our Posts.jsx using destructuring then we need to use that fetch data which is hold by the {postPromise} props. Inside of Posts.jsx function we need to create a variable to use the data. For example: const posts = use(postPromise). If you console log this posts you'll see the data.
// -- How tp display the data to frontend? --//
// 1. Create a component, for example: Post.jsx
// 2. Now import the Post.jsx to Posts.jsx
// 3. Now loop through every single post inside of Posts.jsx using map()
// 4. Inside of the Posts mapping we'll get single post and we'll call the <Post></Post> component and pass the data and set a key.
// 5. Now we need to pass the Props using destructuring to Post.jsx in our case which is {post}
// 6. Finally we can now show the data to frontend. For example {post.title} will show the all the title of the API data.

const fetchPosts = async () => {
  const res = await fetch("https://jsonplaceholder.typicode.com/posts");
  return res.json();
};

function App() {
  // Post Promise function
  const postPromise = fetchPosts();
  return (
    <>
      <section id="center">
        <div className="hero">
          <img src={heroImg} className="base" width="170" height="179" alt="" />
          <img src={reactLogo} className="framework" alt="React logo" />
          <img src={viteLogo} className="vite" alt="Vite logo" />
        </div>
        <div>
          <h1>Get started</h1>
        </div>
      </section>

      <section id="next-steps">
        {/* Calling Posts Components */}
        <div>
          <Suspense
            fallback={<h4 className="text-center">Post are loading...</h4>}
          >
            <Posts postPromise={postPromise}></Posts>
          </Suspense>
        </div>
      </section>

      <div className="ticks"></div>
      <section id="spacer"></section>
    </>
  );
}

export default App;
