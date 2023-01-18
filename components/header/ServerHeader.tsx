import { fetchUsers } from "../../utils/fetcher";
import style from "./ServerHeader.module.scss";

const ServerHeader = async () => {
  // const users = await fetchUsers();
  // const mainUser = users[0];

  return (
    <div className={style["header-component"]}>
      <p className={style["title"]}>ServerHeader</p>
      {/* <p>{mainUser.name}</p> */}
    </div>
  );
};

export default ServerHeader;
