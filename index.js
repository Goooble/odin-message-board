import fs from "fs";
import { createServer } from "http";
import { fileURLToPath } from "url";
import path from "path";

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const server = createServer((req, res) => {
  let filePath;
  let statusCode = 200;
  let header = { "Content-Type": "text/html" };
  let file;
  if (req.url === "/") {
    filePath = path.join(__dirname, "index.html");
  } else if (req.url === "/about") {
    filePath = path.join(__dirname, "about.html");
  } else if (req.url === "/contact") {
    filePath = path.join(__dirname, "contact.html");
  } else {
    filePath = path.join(__dirname, "404.html");
  }
  fs.readFile(filePath, "utf-8", (err, data) => {
    if (err) {
      console.log(err);
      statusCode = 400;
      header = { "Content-Type": "text/plain" };
      return;
    }
    file = data;
    res.writeHead(statusCode, header);
    res.end(file);
  });
});

server.listen(8080);
