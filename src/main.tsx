import fs from "node:fs/promises";
import path from "node:path";
import { renderToStaticMarkup } from "react-dom/server";
import { App } from "./App.js";

const main = async () => {
  const html = renderToStaticMarkup(
    <App title="deploy-hooks-test" date={new Date().toISOString()} />
  );

  const dirname = import.meta.dirname;
  const distPath = path.resolve(path.join(dirname, "..", "dist"));
  await fs.mkdir(distPath);
  await fs.writeFile(path.join(distPath, "index.html"), html, "utf-8");
};

main();
