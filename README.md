# React Suspense + Data Fetching Example

This project demonstrates how to fetch API data in React and display it using **React Suspense** and the **use() hook**.

API used:  
https://jsonplaceholder.typicode.com/posts

---

# Project Structure

```
src/

├── App.jsx
├── Posts.jsx
├── Post.jsx
└── assets/
```

---

# Data Flow Overview

```
App.jsx
   │
   │ fetchPosts() → returns Promise
   │
   ▼
<Suspense>
   │
   ▼
Posts.jsx
   │
   │ use(postPromise)
   │
   ▼
Map posts
   │
   ▼
Post.jsx
```

---

# Step-by-Step Explanation

## 1. Create the Posts Component

Create a component that will receive the fetched data.

```
Posts.jsx
```

This component will later receive the **promise** from `App.jsx`.

---

## 2. Import and Wrap with Suspense

Inside `App.jsx`, import the component and wrap it with **Suspense**.

Suspense handles loading states.

```jsx
<Suspense fallback={<h4>Post are loading...</h4>}>
  <Posts postPromise={postPromise}></Posts>
</Suspense>
```

---

## 3. Fetch the Data

Create an async function to fetch the posts.

```javascript
const fetchPosts = async () => {
  const res = await fetch("https://jsonplaceholder.typicode.com/posts");
  return res.json();
};
```

---

## 4. Create the Promise

Inside `App()` call the fetch function.

```javascript
const postPromise = fetchPosts();
```

This returns a **Promise** containing the API data.

---

## 5. Pass the Promise as Props

Send the promise to the `Posts` component.

```jsx
<Posts postPromise={postPromise}></Posts>
```

---

## 6. Receive and Use the Data

Inside `Posts.jsx`, destructure the props.

```javascript
export default function Posts({ postPromise }) {
```

Use the **React `use()` hook** to resolve the promise.

```javascript
const posts = use(postPromise);
```

Now `posts` contains the fetched data.

Example:

```javascript
console.log(posts);
```

---

# Displaying the Data

## 1. Create a Post Component

Create a component that will display a single post.

```
Post.jsx
```

---

## 2. Import the Component

Inside `Posts.jsx`

```javascript
import Post from "./Post";
```

---

## 3. Loop Through the Posts

Use `map()` to iterate through the posts.

```javascript
{
  posts.map((post) => <Post key={post.id} post={post}></Post>);
}
```

Each post is passed as a prop.

---

## 4. Receive Props in Post Component

Inside `Post.jsx`

```javascript
export default function Post({ post }) {
```

---

## 5. Display the Data

Example: Display the title.

```jsx
<h5>{post.title}</h5>
```

---

# Component Responsibilities

### App.jsx

- Fetches data
- Creates the promise
- Passes the promise to child components
- Handles loading state with Suspense

---

### Posts.jsx

- Resolves the promise using `use()`
- Loops through posts
- Sends each post to `Post.jsx`

---

### Post.jsx

- Displays individual post data

---

# Final Result

1. Fetch posts from API
2. Show loading fallback with Suspense
3. Resolve data with `use()`
4. Loop through posts
5. Render each post title

---

# Key Concepts Practiced

- React Suspense
- React `use()` hook
- Fetch API
- Component composition
- Props passing
- Mapping lists in React

---

# Example Output

```
All Post are here: 100

1. sunt aut facere repellat provident occaecati...
2. qui est esse
3. ea molestias quasi exercitationem repellat...
```

---

# Quick Mental Model

```
Fetch Data → Promise → Suspense → use() → Map → Render
```

```
App → Posts → Post
```
