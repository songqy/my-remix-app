import { createRequestHandler } from "@remix-run/express";
import { broadcastDevReady } from "@remix-run/node";
import express from "express";

import router from "./router/index.mjs";

// notice that the result of `remix build` is "just a module"
import * as build from "../build/index.js";

const app = express();
app.use(express.static("public"));

// api routes
app.use("/api/v1", router);

// and your app is "just a request handler"
app.all("*", createRequestHandler({ build }));

app.listen(3000, () => {
  if (process.env.NODE_ENV === "development") {
    broadcastDevReady(build);
  }
  console.log("App listening on http://127.0.0.1:3000");
});
