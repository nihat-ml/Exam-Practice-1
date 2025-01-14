import {Schema, model} from "mongoose"

let ProductSchema = new Schema({
    image:String,
    title:String,
    price:Number
})

export let ProductModel = model("products", ProductSchema)