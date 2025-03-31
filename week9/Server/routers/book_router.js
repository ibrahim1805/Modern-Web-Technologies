import express from "express";
import Book from "../models/book.js"

const router = express.Router();

// 1 - fetch from DB
router.get("/:id", (req, res) => {
    Books.find().then((results) => {
        res.json(results);
    });
});

// 3 - 

export default router;