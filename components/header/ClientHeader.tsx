"use client";

import useSWR from "swr";
import { fetchUsers } from "../../utils/fetcher";
import style from "./ClientHeader.module.scss";

const ClientHeader = () => {
  const { data: posts = [] } = useSWR("user", fetchUsers);
  const mainPost = posts[0];

  return (
    <div className={style["header-component"]}>
      <p className={style["title"]}>ClientHeader</p>
      <p>{mainPost && mainPost.name}</p>
    </div>
  );
};

export default ClientHeader;
