import Link from "next/link";
import { fetchComment, fetchUser } from "../../utils/fetcher";
import style from "./ServerHeader.module.scss";

// サーバーコンポーネントはasync/awaitを使用できる
const ServerHeader = async () => {
  const commentData = fetchComment();
  const userData = fetchUser();

  const { body } = await commentData;
  const { name } = await userData;

  return (
    <div className={style["header-component"]}>
      <p className={style["title"]}>ServerHeader</p>
      <p>{name}</p>
      <p>{body}</p>
    </div>
  );
};

export default ServerHeader;
