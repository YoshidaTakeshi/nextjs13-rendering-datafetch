import { FC, PropsWithChildren, Suspense } from "react";

import "../styles/globals.scss";
import DefaultHeader from "../components/header/DefaultHeader";

const RootLayout: FC<PropsWithChildren> = ({ children }) => {
  return (
    <html>
      <head>
        <title>Next.js</title>
      </head>
      <body>
        <DefaultHeader />
        {children}
      </body>
    </html>
  );
};

export default RootLayout;
