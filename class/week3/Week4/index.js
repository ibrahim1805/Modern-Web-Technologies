import express from "express"; // if you are using type: module
import logger from "./middleware/logger.js";
import auth from "./middleware/auth.js";
const app = express();
const PORT = process.env.PORT || 8000;
 

app.use(logger); // this is application wide, so it runs everywhere

// routes
app.get("/", logger, (req, res) => {
    logger(req);
  res.send("Welcome to our server");
});

app.get("/about", (req, res) => {
    res.send("Welcome to the about page");
  });

  app.get("/login", (req, res) => {
    res.send("we have receviced your request - login");
  });

app.post("/login", (req, res) => {
  res.send("we stole your information");
});

app.get("/fetchData", (req, res) => {
    res.send("Welcome to our server");
  });

app.listen(PORT, () => {
    console.log(`http://localhost:${PORT}`);
});
