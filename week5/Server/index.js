import express from "express";
import cors from "cors";
import multer from "multer";

import path from 'path'; 
import { fileURLToPath } from "url";

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);


const storage = multer.diskStorage({
    destination: function (req, file, cb) {
      cb(null, path.join(__dirname, 'upload'));
    },
    filename: function (req, file, cb) {
      const uniquePrefix = Date.now() + '-' + Math.round(Math.random() * 1E9)
      cb(null, uniqueSuffix + '-' + file.fieldname)
    }
  })
  
  const upload = multer({ storage: storage })

const app = express();
const PORT = process.env.PORT || 8000;

// Middleware
app.use(cors());
app.use(express.urlencoded({extended: true})); 
app.use(express.json());

// routes
app.get("/", (req, res) => {
  res.send("Welcome to our server");
});


app.get("/data", (req, res) => {
  const data = {
    fname: "ibrahim",
    lname: "hagi",
  };
  res.send(data);
});


app.post("/login", (req, res) => {
  console.log(req.body);
  res.send(["i stole your data."])
});

app.post("/fileform", upload.single(), (req, res)=> {
    console.log(req.file)
    console.log(req.body)
    res.json("i recevied your information")
})


app.listen(PORT, () => {
  console.log(`Server running at http://localhost:${PORT}`);
});


/*app.use((req, res) => {
    res.status(404).send("Page not found");
  });*/
  