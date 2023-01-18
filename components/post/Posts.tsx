import { fetchPosts } from "../../utils/fetcher";

const Posts = async () => {
  const posts = await fetchPosts();

  return (
    <div>
      <h1>Get Posts!</h1>
      <div>
        {posts.map((post) => {
          return (
            <p key={post.id}>
              {post.id}: {post.title}
            </p>
          );
        })}
      </div>
    </div>
  );
};

export default Posts;
