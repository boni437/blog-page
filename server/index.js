import express from "express";
import mongoose from "mongoose";
import dotenv from "dotenv";
import cors from "cors";
import postRoute from './routes/postRoute.js';
import authRoute from "./routes/authRoute.js";

const PORT = 5000;

const app = express();
app.use(express.json());
app.use(cors());
dotenv.config();

// tes if the server respond properly
app.get('/', (request, response) => {
    console.log(request);
    return response.send('test from back end');
  });


//   const DB_CONNECTION = 'mongodb+srv://abel:abel@blog-page.9vrwjrv.mongodb.net/?retryWrites=true&w=majority&appName=blog-page';
mongoose
    .connect(process.env.DB_CONNECTION)
    .then(() => {
        console.log("Database connected successfully")
    })
    .catch((error) => {
        console.log(error);
    });


app.listen(PORT, () => {
    console.log("the server is running")
});

app.use('/post', postRoute);
app.use("/blog", authRoute);
