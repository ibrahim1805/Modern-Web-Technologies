/*
    /name
    /greeting
    /add
    /calculate
*/

import express from "express";

const router = express.Router();

// checking if in route
router.get("/", (req, res) => {
    res.send("Welcome to the lab router");
});

// name route
router.get("/name", (req, res) => {
    res.send("Ibrahim Hagi");
});

// greeting 
router.get("/greeting", (req, res) => {
    res.send("Hello from Ibrahim, Student number n01623109");
});

// add
router.get("/add/:x/:y", (req, res) => {
    let x = parseFloat(req.params.x);
    let y = parseFloat(req.params.y);
    res.send(`${x + y}`);
});

// calculate
router.get("/calculate/:a/:b/:operation", (req, res) => {
    let a = parseFloat(req.params.a);
    let b = parseFloat(req.params.b);
    let operation = req.params.operation;
    let result = 0;

    switch (operation) {
        case "+":
            result = a + b;
            break;
        case "-":
            result = a - b;
            break;
        case "*":
            result = a * b;
            break;
        case "div": 
            if (b !== 0) {
                result = a / b;
            } else {
                res.status(400).send("Division by zero is not allowed");
                return;
            }
            break;
        default:
            res.status(400).send("Invalid Operation");
            return;
    }

    //res.send(`${result}`);
    res.send(`${a} ${operation} ${b} = ${result}`)
});

export default router;
