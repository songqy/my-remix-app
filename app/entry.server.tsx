import { RemixServer } from "@remix-run/react";
import { renderToString } from "react-dom/server";
import { createCache, StyleProvider, extractStyle } from "@ant-design/cssinjs";

export default function handleRequest(
  request,
  responseStatusCode,
  responseHeaders,
  remixContext,
  loadContext
) {
  const cache = createCache();

  const App = () => {
    return (
      <StyleProvider cache={cache}>
        <RemixServer context={remixContext} url={request.url} />
      </StyleProvider>
    );
  };

  let markup = renderToString(<App />);
  const styleText = extractStyle(cache);
  markup = markup.replace("__ANTD__", styleText);

  responseHeaders.set("Content-Type", "text/html");

  return new Response(`<!DOCTYPE html>${markup}`, {
    status: responseStatusCode,
    headers: responseHeaders,
  });
}
