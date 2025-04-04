/*
home page 
about us 
contact 
login
register
details
search page
*/

import http from "http";
import fs from "fs";
import path from "path";
import { fileURLToPath } from "url";

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);


const app = http.createServer((req, res) => {

    const pagesDir = path.join(__dirname, "pages");

    const serveHtmlFile = (fileName, res) => {
        const filePath = path.join(pagesDir, fileName);
        console.log("Serving file:", filePath); 
        fs.readFile(filePath, (err, data) => {
            if (err) {
                console.error(`Error reading file: ${filePath}`, err); 
                res.writeHead(500, { "Content-Type": "text/plain" });
                res.end("Internal Server Error");
            } else {
                res.writeHead(200, { "Content-Type": "text/html" });
                res.end(data);
            }
        });
    };

    if (req.url === "/") {
        serveHtmlFile("home.html", res);
    } else if (req.url === "/about") {
        serveHtmlFile("about.html", res);
    } else if (req.url === "/contact") {
        serveHtmlFile("contact.html", res);
    } else if (req.url === "/login") {
        serveHtmlFile("login.html", res);
    } else if (req.url === "/register") {
        serveHtmlFile("register.html", res);
    } else if (req.url === "/details") {
        serveHtmlFile("details.html", res);
    } else if (req.url === "/search") {
        serveHtmlFile("search.html", res);
    } else {
       
        serveHtmlFile("404.html", res);
    }
});

const PORT = process.env.PORT || 8000;
app.listen(PORT, () => {
    console.log(`Server is running on http://localhost:${PORT}`);
});