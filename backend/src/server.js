// Both the below lines are same but 1 uses type module while other uses common.js
import express from "express";
// const express = require("express");
import notesRoute from "./routes/noteRoute.js"; 

const app = express();
const PORT = 5001;

app.use("/api/notes", notesRoute);

app.listen(PORT, () => {
  console.log(`Server is running on port http://localhost:${PORT}`);
});