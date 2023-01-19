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
  const res = await fetch("http://localhost:3000/api/posts", { cache: 'no-store' });
  return res.json();
};

export const fetchUsers: () => Promise<User[]> = async () => {
  const res = await fetch("http://localhost:3000/api/users");
  return res.json();
};

export const fetchUser: () => Promise<User> = async () => {
  const res = await fetch("http://localhost:3000/api/user");
  return res.json();
};

export const fetchComment: () => Promise<Comment> = async () => {
  // const res = await fetch("http://localhost:3000/api/comment", { cache: 'no-store' });
  const res = await fetch("http://localhost:3000/api/comment");
  return res.json();
}