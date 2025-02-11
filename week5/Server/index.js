import express from ("express"); 
 
const app = express();
const PORT = process.env.PORT || 8000;
 
// middlelware

 
// routes
app.get("/", (req, res) => {
  res.send("Welcome to our server");
});

 // send data
 app.get("/data", (req, res) => {
    const data = {
        fname: "ibrahim",
        lname: "hagi",
    }
    res.send(data);
  });

app.listen(PORT, () => {
  console.log(`http://localhost:${PORT}`);
});
 
app.use("", (req, res) => {
  res.status(404).send("Page not found");
});