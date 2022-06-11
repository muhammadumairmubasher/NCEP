import express from 'express';
import mongoose from 'mongoose';
import cors from 'cors';
import bodyParser from 'body-parser';
import route from './route/route.js';
import dotenv from 'dotenv'
import cookieParser from 'cookie-parser';

const app=express();
app.use(cookieParser())
app.use(bodyParser.json({limit:'50mb'}));
app.use(bodyParser.urlencoded({limit:'50mb',extended:true}));
app.use(bodyParser.json({extended:true}));
app.use(bodyParser.urlencoded({extended:true}));
app.use(cors({
    origin: ['http://localhost:3000'],
    credentials: true,
    sameSite: 'none'
}));
app.use('/',route);


dotenv.config({path:'./config.env'});

const DB = process.env.DATABASE;
const PORT = process.env.PORT;
 
mongoose.connect(DB,{ 
    useNewUrlParser:true, 
    useUnifiedTopology:true
}).then(()=>{
    app.listen(PORT,()=>{
        console.log('Connection Successful');
        console.log(`Server is running on port ${PORT}`);
   });
}).catch(error=>{
    console.log('Error: ', error.message);
})