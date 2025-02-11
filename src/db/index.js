import mongoose from 'mongoose';
import {DB_NAME} from '../constants.js';


const connectDb = async ()=>{
    try {
        const connectionInstance = await mongoose.connect(`${process.env.MONGODB_URI}/${DB_NAME}`);
        console.log(`/n MongDB connected !! DB Host:${connectionInstance.connection.host}`);
        
        
        
    } catch (error) {
        console.log("database connection error",error);
        process.exit();
        
    }
} 

export default connectDb