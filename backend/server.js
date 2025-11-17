// Both the below lines are same but 1 uses type module while other uses common.js
import express from "express";
// const express = require("express");

const app = express();
const PORT = 5001;

app.get("/api/notes", (req,res) => {
    res.status(200).send("You got 5 notes");
})

app.post("/api/notes", (req,res) => {
  res.status(201).json({message:"Note Created Successfully!"})
})

app.put("/api/notes/:id", (req,res) => {
  res.status(200).json({message:`Note with id ${req.params.id} Updated Successfully!`})
})

app.delete("/api/notes/:id", (req,res) => {
  res.status(200).json({message:`Note with id ${req.params.id} Deleted Successfully!`})
})

app.listen(PORT, () => {
  console.log(`Server is running on port http://localhost:${PORT}`);
});