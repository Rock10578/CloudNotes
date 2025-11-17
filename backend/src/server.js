import dotenv from 'dotenv';
import express from "express";
import notesRoute from "./routes/noteRoute.js"; 
import { connectDB } from "./config/db.js";
dotenv.config();

const app = express();
const PORT = process.env.PORT || 5001;

connectDB();

app.use("/api/notes", notesRoute);

app.listen(PORT, () => {
  console.log(`Server is running on port http://localhost:${process.env.PORT}`);
});
