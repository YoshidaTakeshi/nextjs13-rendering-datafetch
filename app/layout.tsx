import { FC, PropsWithChildren, Suspense } from "react";
import ClientHeader from "../components/header/ClientHeader";
import ServerHeader from "../components/header/ServerHeader";
import "../styles/globals.scss";

const RootLayout: FC<PropsWithChildren> = ({ children }) => {
  return (
    <html>
      <head>
        <title>Next.js</title>
      </head>
      <body>
        {/* @ts-expect-error Server Component */}
        <ServerHeader />
        <ClientHeader />
        {children}
      </body>
    </html>
  );
};

export default RootLayout;
