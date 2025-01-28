import express, { query, urlencoded } from "express"
import dotenv from "dotenv"

dotenv.config()
const app = express();
const PORT = process.env.PORT || 8000;

// CRUD -> server is setup to do theses thinngs

// Methods: GET(READ), POST (CREATE), PUT(UPDATE), DELETE


app.get("/", (req, res)=>{
    res.send("Welcome to the server - GET")
})
app.post("/", (req, res)=>{
    ("Welcome to the server - POST")
})
app.put("/", (req, res)=>{
    ("Welcome to the server - PUT")
})
app.delete("/", (req, res)=>{
    ("Welcome to the server - DELETE")
})

app.listen(PORT, () => {
    console.log(`http://localhost:${PORT}`);
});

app.get("/search", (req, res)=>{
    console.log(req.url)
    console.log(req.headers)
    console.log(req.query)
    res.send("You came to the /search route")
})

app.get("/items/:itemID", (req, res)=>{
    console.log(req.url)
    console.log(req.headers)
    console.log(req.query)
    res.send("You came to the /search route")
})