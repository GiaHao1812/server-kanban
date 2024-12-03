import cors from "cors"
import dotenv from 'dotenv'
import express from 'express'
import mongoose from 'mongoose';
import userRouter from './src/routers/userRouters'
import storageRouter from './src/routers/storageRouters'
import { verifyToken } from "./src/middlewares/verifyToken";

dotenv.config()


const PORT = process.env.PORT  || 3002;
const dbURL = `mongodb+srv://${process.env.DATABASE_USERNAME}:${process.env.DATABASE_PASSWORD}@cluster0.rohbi.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0`
const app = express();

app.use(express.json());
app.use(cors());

app.use('/auth',userRouter);
app.use(verifyToken);
app.use('/storage',storageRouter);

const connectDB = async () =>{
    try {
        await mongoose.connect(dbURL);
        console.log("Database connected successfully!!!")
    } catch (error) {
        console.log("Cannot connect to database")
    }
}

connectDB()
.then(() => {
    app.listen(PORT,() => {
        console.log(`Server is starting at http://localhost:${PORT}`)
        });
    
}).catch((error) => {
    console.log(error)
});

