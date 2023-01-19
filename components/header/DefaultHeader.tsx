import Link from "next/link";
import style from "./ServerHeader.module.scss";

const DefaultHeader = () => {
  return (
    <div className={style["header-component"]}>
      <p className={style["title"]}>DefaultHeader</p>
      <Link href="/kensho1">検証1へ</Link>
      <Link href="/kensho2">検証2へ</Link>
    </div>
  );
};

export default DefaultHeader;
