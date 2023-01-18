import { Suspense } from "react";
import Posts from "../components/post/Posts";
import Users from "../components/user/users";
import { fetchComment, fetchPosts, fetchUsers } from "../utils/fetcher";

const Page = async () => {
  fetchComment();

  return (
    <div style={{ display: "flex" }}>
      <Suspense fallback={<div>Loading users...</div>}>
        {/* @ts-expect-error Server Component */}
        <Users />
      </Suspense>
      <Suspense fallback={<div>Loading posts...</div>}>
        {/* @ts-expect-error Server Component */}
        <Posts />
      </Suspense>
    </div>
  );
};

export default Page;
