"use client";
// この記述だけでクライアントコンポーネントになる

import useSWR from "swr";
import { fetchUser } from "../../utils/fetcher";
import style from "./ClientHeader.module.scss";

const ClientHeader = () => {
  const { data: user } = useSWR("user", fetchUser);

  return (
    <div className={style["header-component"]}>
      <p className={style["title"]}>ClientHeader</p>
      <p>{user && user.name}</p>
    </div>
  );
};

export default ClientHeader;
