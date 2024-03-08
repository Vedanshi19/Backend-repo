//require('dotencv').config({path:'./env'})
import dotenv from 'dotenv'
import connectDB from "./db/index.js";

dotenv.config({
  path:'./env'
})

connectDB()

/*
import { express } from "express";
const app = express()

;(async()=>{ //iffi
  try {
    await mongoose.connect(`${process.env.MONGOBD_URI}/${DB_NAME}`)
    app.on("error",(error)=>{
      console.log("ERR :", error);
      throw err
    })

app.listen(process.env.PORT,()=>{
  console.log(`app is listening on port ${process.env.PORT}`);
})

  } catch (error) {
    console.log("ERROR :", error);
    throw err
  }
})()
*/