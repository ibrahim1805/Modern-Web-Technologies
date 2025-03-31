import express from "express";
import cors from "cors";
import mongoose from "mongoose";
import dotenv from "dotenv";
import book_router from "./models/book_router.js"


//variable
dotenv.config()
const app = express();
const PORT = process.env.PORT || 6000;


//mmiddleware

//routes

//start up
mongoose.connect(process.env.MONGOOB_URL)
.then(() => {
    console.log("DB is connected")
    app.listen(PORT, ()=> {
        console.log(`http://localhost:${PORT}`);
    });
});

//routes
app.use("/books", book_router);