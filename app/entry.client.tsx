import React from "react";
import { RemixBrowser } from "@remix-run/react";
import { hydrateRoot } from "react-dom/client";
import { createCache, StyleProvider } from "@ant-design/cssinjs";

const ClientCacheProvider: React.FC<React.PropsWithChildren> = ({
  children,
}) => {
  const cache = createCache();

  return <StyleProvider cache={cache}>{children}</StyleProvider>;
};

hydrateRoot(
  document,
  <ClientCacheProvider>
    <RemixBrowser />
  </ClientCacheProvider>
);
