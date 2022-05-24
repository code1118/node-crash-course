// const http = require("http");

// const HOSTNAME = process.env.HOSTNAME || "localhost";
// const PORT = process.env.PORT || 3000;

// const server = http.createServer((request, response) => {
//   response.statusCode = 200;
//   response.setHeader("Content-Type", "text/plain");
//   response.end("Hello World");
// });
// server.listen(PORT, HOSTNAME, () => {
//   console.log(`Server running at http://${HOSTNAME}:${PORT}/`);
// });

// console.log(__filename);
// console.log(__dirname);

// const { readFile, readFileSync } = require("fs");

/** read file sync */
// try {
//   const data = readFileSync("hi.txt", "utf-8");
//   console.log(data);
// } catch (err) {
//   console.error(err);
// }
// console.log("Log from oustide");

/** read file */
// fs.readFile("hi.txt", (err, data) => {
//   if (err) {
//     console.error(err);
//     return;
//   }
//   console.log(data.toString());
// });

// const { writeFile, writeFileSync } = require("fs");

// const newContent = "This is some new text";
// /** write file sync */
// try {
//   writeFileSync("hi.txt", newContent, { flag: "a" });
//   console.log("Content written!");
// } catch (err) {
//   console.error(err);
// }
/** write file */
// writeFile("hi.txt", newContent, { flag: "a" }, (err) => {
//   if (err) {
//     console.error(err);
//     return;
//   }
//   console.log("Content written!");
// });
/** append file */
// const { appendFile } = require("fs");
// const newContent = "\nThis is some more new text";

// appendFile("hi.txt", newContent, (err) => {
//   if (err) {
//     console.log(err);
//     return;
//   }
//   console.log("Content written!");
// });
/** Renaming and
 * Deleting files
 */
// rename
// const { rename } = require("fs");

// rename("hi.txt", "hello.txt", (err) => {
//   if (err) {
//     console.log(err);
//     return;
//   }
//   console.log("File renamed!");
// });
// delete
// const { unlink } = require("fs");

// unlink("hello.txt", (err) => {
//   if (err) {
//     console.log(err);
//     return;
//   }
//   console.log("File deleted!");
// });
/** Exporting and
 * importing
 */
// const addNums = require("./addNums");
// using export only .mjs
// import { addNums } from "./addNums.js";
// const sum = addNums(10, 10);
// console.log(sum);
/** Basicc
 * HTML Content
 */
// const http = require("http");

// const PORT = process.env.PORT || 3000;

// const server = http.createServer((req, res) => {
//   res.statusCode = 200;
//   res.setHeader("Content-Type", "text/html");
//   res.end("<h1>Hello World</h1>");
// });
// server.listen(PORT, () => console.log(`Server is listening on port ${PORT}`));
/** WEB SERVER
 * HTML files
 */
// const http = require("http");
// // file system module
// const fs = require("fs");
// const PORT = process.env.PORT || 3000;

// const server = http.createServer((req, res) => {
//   res.statusCode = 200;
//   res.setHeader("Content-Type", "text/html");
//   fs.readFile("./index.html", (err, data) => {
//     if (err) {
//       console.error(err);
//       res.end();
//     } else {
//       // res.write(data);
//       // res.end();
//       /** to shorten because it's only sending one thing */
//       res.end(data);
//     }
//   });
// });
// server.listen(PORT, () => console.log(`Server is listening on port ${PORT}`));
/** WEB SERVER
 * Basic Routing
 */
// const http = require("http");
// // file system module
// const fs = require("fs");
// const PORT = process.env.PORT || 3000;

// const server = http.createServer((req, res) => {
//   res.statusCode = 200;
//   res.setHeader("Content-Type", "text/html");
//   // if there is differnt many pages, create view folder and put everthing in there
//   let path = "./";
//   switch (req.url) {
//     case "/":
//       path += "index.html";
//       break;
//     case "/about":
//       path += "about.html";
//       break;
//     default:
//       path += "404.html";
//       break;
//   }

//   fs.readFile(path, (err, data) => {
//     if (err) {
//       console.error(err);
//       res.end();
//     } else {
//       // res.write(data);
//       // res.end();
//       /** to shorten because it's only sending one thing */
//       res.end(data);
//     }
//   });
// });
// server.listen(PORT, () => console.log(`Server is listening on port ${PORT}`));
/** WEB SERVER
 * Status Codes
 */
// const http = require("http");
// // file system module
// const fs = require("fs");
// const PORT = process.env.PORT || 3000;

// const server = http.createServer((req, res) => {
//   res.setHeader("Content-Type", "text/html");
//   // if there is differnt many pages, create view folder and put everthing in there
//   let path = "./";
//   switch (req.url) {
//     case "/":
//       path += "index.html";
//       res.statusCode = 200;
//       break;
//     case "/about":
//       path += "about.html";
//       res.statusCode = 200;
//       break;
//     default:
//       path += "404.html";
//       res.statusCode = 404;
//       break;
//   }

//   fs.readFile(path, (err, data) => {
//     if (err) {
//       console.error(err);
//       res.end();
//     } else {
//       // res.write(data);
//       // res.end();
//       /** to shorten because it's only sending one thing */
//       res.end(data);
//     }
//   });
// });
// server.listen(PORT, () => console.log(`Server is listening on port ${PORT}`));
/** WEB SERVER
 * Redirects
 */
// const http = require("http");
// // file system module
// const fs = require("fs");
// const PORT = process.env.PORT || 3000;

// const server = http.createServer((req, res) => {
//   res.setHeader("Content-Type", "text/html");
//   // if there is differnt many pages, create view folder and put everthing in there
//   let path = "./";
//   switch (req.url) {
//     case "/":
//       path += "index.html";
//       res.statusCode = 200;
//       break;
//     case "/about":
//       path += "about.html";
//       res.statusCode = 200;
//       break;
//     default:
//       res.setHeader("Location", "/");
//       res.statusCode = 301;
//       break;
//   }

//   fs.readFile(path, (err, data) => {
//     if (err) {
//       console.error(err);
//       res.end();
//     } else {
//       // res.write(data);
//       // res.end();
//       /** to shorten because it's only sending one thing */
//       res.end(data);
//     }
//   });
// });
// server.listen(PORT, () => console.log(`Server is listening on port ${PORT}`));
/** NPM
 * Node Package Manager
 */
// const http = require("http");
// // file system module
// const fs = require("fs");
// const PORT = process.env.PORT || 3000;

// const server = http.createServer((req, res) => {
//   res.setHeader("Content-Type", "text/html");
//   // if there is differnt many pages, create view folder and put everthing in there
//   let path = "./";
//   switch (req.url) {
//     case "/":
//       path += "index.html";
//       res.statusCode = 200;
//       break;
//     case "/about":
//       path += "about.html";
//       res.statusCode = 200;
//       break;
//     default:
//       path += "404.html";
//       res.statusCode = 404;
//       break;
//   }

//   fs.readFile(path, (err, data) => {
//     if (err) {
//       console.error(err);
//       res.end();
//     } else {
//       // res.write(data);
//       // res.end();
//       /** to shorten because it's only sending one thing */
//       res.end(data);
//     }
//   });
// });
// server.listen(PORT, () => console.log(`Server is listening on port ${PORT}`));
/** DEPLOY
 * Heroku
 */
const http = require("http");
// file system module
const fs = require("fs");
const PORT = process.env.PORT || 3000;

const server = http.createServer((req, res) => {
  res.setHeader("Content-Type", "text/html");
  // if there is differnt many pages, create view folder and put everthing in there
  let path = "./";
  switch (req.url) {
    case "/":
      path += "index.html";
      res.statusCode = 200;
      break;
    case "/about":
      path += "about.html";
      res.statusCode = 200;
      break;
    default:
      path += "404.html";
      res.statusCode = 404;
      break;
  }

  fs.readFile(path, (err, data) => {
    if (err) {
      console.error(err);
      res.end();
    } else {
      // res.write(data);
      // res.end();
      /** to shorten because it's only sending one thing */
      res.end(data);
    }
  });
});
server.listen(PORT, () => console.log(`Server is listening on port ${PORT}`));
