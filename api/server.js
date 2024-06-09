import express from "express";
import dotenv from "dotenv";
import mongoose from "mongoose";
import userRoutes from './routes/user.route.js'
import authRoutes from './routes/auth.route.js'

dotenv.config();

mongoose
  .connect(process.env.MONGO)
  .then(() => console.log("mongodb connected"))
  .catch((err) => {
    console.log(err);
  });
const app = express();
app.use(express.json())
const PORT = 3000;

app.use('/api/user',userRoutes)
app.use('/api/auth',authRoutes)

app.use((err,req,res,next)=>{
    const statusCode=err.statusCode || 500;
    const message=err.message || 'Internal server error';
    return res.status(statusCode).json({
        success:false,
        message,
        statusCode,
    })
})


app.listen(PORT, () => console.log(`server running on port ${PORT}`));
