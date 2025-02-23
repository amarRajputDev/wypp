import express from 'express';
import bodyParser from 'body-parser';
import cors from 'cors';
import dotenv from 'dotenv';
import dbConnect from './config/DbConnect.js';
import userRoutes from "./routes/userRoutes.js"
import cookieParser from "cookie-parser";


dotenv.config({});
const app = express();
app.use(express.json());
app.use(cookieParser()); 
app.use(bodyParser.json());
app.use(express.urlencoded({extended:true}))
app.use(
  cors({
    origin: "http://localhost:5173", // Explicitly allow your frontend origin
    credentials: true, // Allow cookies, tokens, and other credentials
  })
);
const PORT = process.env.PORT 

//Routes
app.use("/api/user" , userRoutes)

app.listen(PORT, () => {
  dbConnect()
  console.log(`Server is running on port ${PORT}`);
});

