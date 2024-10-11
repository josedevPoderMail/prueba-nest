import { Schema } from "mongoose";



export const ClientSchema = new Schema({
name: {type:String, required:true},
email: {type:String, required:true, unique:true},
phone: {type:String, required:true},
password: {type:String, required:true}
});