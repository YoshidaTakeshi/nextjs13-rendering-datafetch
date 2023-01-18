export type Post = {
  id: number;
  userId: number;
  title: string;
  body: string;
};

export type User = {
  id: number
  name: string
}

export type Comment = {
  body: string
}

export const fetchPosts: () => Promise<Post[]> = async () => {
  const res = await fetch("http://localhost:3000/api/posts", { next: { revalidate: 0 } });
  await new Promise((resolve) => setTimeout(resolve, 3000));
  return res.json();
};

export const fetchUsers: () => Promise<User[]> = async () => {
  const res = await fetch("http://localhost:3000/api/users", { next: { revalidate: 0 } });
  return res.json();
};

export const fetchComment: () => Promise<Comment> = async () => {
  const res = await fetch("http://localhost:3000/api/comment");
  return res.json();
}