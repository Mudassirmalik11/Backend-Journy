// require ('dotenv').config({path:'./env'});
import dotenv from "dotenv";

// console.log("MONGODB_URI:", process.env.MONGODB_URI); // Debugging line
dotenv.config({path:'./env'})
import connectDb from "./db/index.js";


connectDb()