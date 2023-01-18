import { FC, PropsWithChildren, Suspense } from "react";
import ClientHeader from "../../components/header/ClientHeader";
import ServerHeader from "../../components/header/ServerHeader";
import "../../styles/globals.scss";

const Kensho1Layout: FC<PropsWithChildren> = ({ children }) => {
  return (
    <>
      {/* この現状この記述がないとpageまたはlayout以外のasyncSCはtypeエラーが出る */}
      {/* @ts-expect-error Server Component  */}
      <ServerHeader />
      <ClientHeader />
      {children}
    </>
  );
};

export default Kensho1Layout;
