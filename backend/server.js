// Both the below lines are same but 1 uses type module while other uses common.js
import express from "express";
// const express = require("express");

const app = express();
const PORT = 5001;

app.get("/api/notes", (req,res) => {
    res.send("You got 5 notes");
})

app.listen(PORT, () => {
  console.log(`Server is running on port http://localhost:${PORT}`);
});