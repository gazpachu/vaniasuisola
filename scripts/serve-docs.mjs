import fs from "fs";
import path from "path";
import { fileURLToPath } from "url";
import http from "http";

const __dirname = path.dirname(fileURLToPath(import.meta.url));
const rootDir = path.resolve(__dirname, "..");
const docsDir = path.resolve(rootDir, "docs");
const PORT = 5000;

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

if (!fs.existsSync(docsDir)) {
  console.error("❌ Error: docs/ directory not found. Please run 'npm run build' first.");
  process.exit(1);
}

const server = http.createServer((req, res) => {
  const decodedUrl = decodeURIComponent(req.url.split("?")[0]);
  let filePath = path.join(docsDir, decodedUrl);

  // If path is a directory (like /about), look for index.html inside it
  if (fs.existsSync(filePath) && fs.statSync(filePath).isDirectory()) {
    filePath = path.join(filePath, "index.html");
  }

  // If file doesn't exist, fall back to docs/404.html (simulating GitHub Pages 404 fallback routing)
  if (!fs.existsSync(filePath)) {
    filePath = path.join(docsDir, "404.html");
    if (!fs.existsSync(filePath)) {
      filePath = path.join(docsDir, "index.html");
    }
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

server.listen(PORT, () => {
  const baseUrl = `http://localhost:${PORT}`;
  console.log("\n============================================================");
  console.log(`🚀 Static server running at: ${baseUrl}`);
  console.log(`📁 Serving directory: ${path.relative(rootDir, docsDir)}`);
  console.log("============================================================\n");
  console.log("Interactive Prerendered Pages Links (Ctrl+Click to open):");
  
  routes.forEach((route) => {
    console.log(`  - ${route.padEnd(12)} ->  \x1b[36m${baseUrl}${route}\x1b[0m`);
  });
  console.log("\nPress Ctrl+C to stop the server...\n");
});
