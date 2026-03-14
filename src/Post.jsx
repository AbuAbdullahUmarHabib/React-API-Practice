export default function Post({ post }) {
  return (
    <div>
      {/* Displaying the fetch data title */}
      <li>
        <h5>{post.title}</h5>
      </li>
    </div>
  );
}
