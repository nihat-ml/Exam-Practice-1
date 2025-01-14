import express from "express"
const app = express()
import cors from "cors"
import { config } from "dotenv"
import  {route}  from "./routers/ProductRouter.js" 
app.use(express.json())
app.use(cors())
config()
import "./config/config.js"
app.use("/products",route)
app.listen(3001,()=>{
    console.log("bu app 3001 portunda dinlenilir")
})