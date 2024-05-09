import express,{Request,Response} from 'express';
import cors from 'cors';
import bodyParser from 'body-parser';
import dotenv from 'dotenv';
import authRouter from "./routes/auth";

dotenv.config();

const app = express();

// Middleware
app.use(cors());
app.use(bodyParser.json());

// Routes
app.use('/auth', authRouter);

app.get("/users",(req:Request,res:Response)=>{
    res.send("hiii")
})

const PORT = process.env.PORT || 3000;
app.listen(PORT,()=>{
    console.log("server is running at port: http://localhost:"+PORT);

});
