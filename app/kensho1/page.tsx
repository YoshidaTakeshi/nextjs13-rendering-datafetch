import { Suspense } from "react";
import Posts from "../../components/post/Posts";
import Users from "../../components/user/users";
import { fetchComment } from "../../utils/fetcher";

const Kensho1Page = async () => {
  const { body } = await fetchComment();

  return <p>{body}</p>;
};

export default Kensho1Page;
