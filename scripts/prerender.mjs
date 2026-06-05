import fs from "fs";
import path from "path";
import { fileURLToPath } from "url";
import http from "http";

const __dirname = path.dirname(fileURLToPath(import.meta.url));
const rootDir = path.resolve(__dirname, "..");
const docsDir = path.resolve(rootDir, "docs");

const routes = [
  "/",
  "/about",
  "/work",
  "/contact",
  "/es",
  "/es/about",
  "/es/work",
  "/es/contact",
  "/it",
  "/it/about",
  "/it/work",
  "/it/contact",
];

function getFilePath(route) {
  if (route === "/") {
    return path.join(docsDir, "index.html");
  }
  const cleanRoute = route.startsWith("/") ? route.slice(1) : route;
  return path.join(docsDir, cleanRoute, "index.html");
}

async function runPrerender() {
  console.log("🚀 Starting lightweight SPA server...");

  // Start a local HTTP server that serves static files from 'docs'
  // and falls back to docs/index.html for any SPA routes.
  const server = http.createServer((req, res) => {
    const decodedUrl = decodeURIComponent(req.url.split("?")[0]);
    let filePath = path.join(docsDir, decodedUrl);

    // If file doesn't exist or is a directory, serve the index.html fallback
    if (!fs.existsSync(filePath) || fs.statSync(filePath).isDirectory()) {
      filePath = path.join(docsDir, "index.html");
    }

    fs.readFile(filePath, (err, content) => {
      if (err) {
        res.writeHead(500, { "Content-Type": "text/plain" });
        res.end("Internal Server Error");
        return;
      }

      // Basic content type detection
      let contentType = "text/html";
      const ext = path.extname(filePath).toLowerCase();
      if (ext === ".js") contentType = "application/javascript";
      else if (ext === ".css") contentType = "text/css";
      else if (ext === ".png") contentType = "image/png";
      else if (ext === ".jpg" || ext === ".jpeg") contentType = "image/jpeg";
      else if (ext === ".woff2") contentType = "font/woff2";

      res.writeHead(200, { "Content-Type": contentType });
      res.end(content);
    });
  });

  // Listen on port 0 to let the OS assign a random free port
  server.listen(0, async () => {
    const port = server.address().port;
    const baseUrl = `http://localhost:${port}`;
    console.log(`📡 Server listening on dynamic port ${port}`);

    try {
      console.log("\n📄 Prerendering routes...");
      for (const route of routes) {
        const url = `${baseUrl}${route}`;
        console.log(`  Fetching: ${route} (${url})`);
        const response = await fetch(url);
        if (!response.ok) {
          throw new Error(`Failed to fetch ${route}: HTTP ${response.status}`);
        }
        const html = await response.text();
        const filePath = getFilePath(route);

        // Create folder structure if needed and write html
        fs.mkdirSync(path.dirname(filePath), { recursive: true });
        fs.writeFileSync(filePath, html, "utf-8");
        console.log(`  ✅ Written to ${path.relative(rootDir, filePath)}`);
      }

      console.log("\n🎉 Prerendering successfully complete!");

      // Copy docs/index.html to docs/404.html as a fallback for GitHub Pages routing
      const fallbackPath = path.join(docsDir, "404.html");
      fs.copyFileSync(getFilePath("/"), fallbackPath);
      console.log(`  ✅ Copied fallback to 404.html`);
    } catch (error) {
      console.error("❌ Prerendering failed:", error);
      process.exitCode = 1;
    } finally {
      console.log("🛑 Stopping server...");
      server.close();
    }
  });
}

runPrerender();
