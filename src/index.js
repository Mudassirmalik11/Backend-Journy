// require ('dotenv').config({path:'./env'});
import dotenv from "dotenv";

dotenv.config({path:'./env'})
import connectDb from "./db/index.js";


connectDb()
.then(() => {
    app.listen(process.env.PORT || 800, () => {
        console.log(`Server is running at port : ${process.env.PORT}`);
        
    })
})
.catch( (err) => {
console.log(`Database connection failed !!!`,err)
})