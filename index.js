
/*
import mongoose from "mongoose";
const pass = "0070070070";
const data_base_name="ayushkumar302000"
import {loginschema} from "./mongodbconnect.js"
const collection_name = "ecom2";
const mongoURI = `mongodb+srv://${data_base_name}:${pass}@cluster0.ehz40xr.mongodb.net/${collection_name}?retryWrites=true&w=majority`;



*/




import express from "express";
import cors from "cors";

// import { MongoClient } from "mongodb";
const app=express();
import mongoose from "mongoose";
const pass = "Bhawishya11";
import {loginschema} from "./mongodbconnect.js"
const collection_name = "ecom2";
const mongoURI=``;
console.log("hii",mongoURI)
// const db=`mongodb+srv://ayushkumar302000:${pass}>@cluster0.qxhqyuf.mongodb.net/${collection_name}?retryWrites=true&w=majority&appName=Cluster0`
app.use(cors());
app.use(express.json());
app.use(express.urlencoded({extended:false}))
const uri = `mongodb+srv://Bhawishyasingh:${pass}@cluster0.qxhqyuf.mongodb.net/${collection_name}?retryWrites=true&w=majority&appName=Cluster0`;

 mongoose.connect(uri, {
    
})


app.get("/",(req,res)=>{
    console.log("hii")
    res.send("yes");
})
app.post("/login",async (req,res)=>{

    

    const{email,password,name}=req.body;
    console.log(email,password,name)
    const product=mongoose.model("authlogin",loginschema);
    let data=new product({
        name:name,
        password:password,
        email:email
    })

    let save=await data.save()
    res.send("save suess full")

})
// hii
// app.post("/savedata",async (req,res)=>
// {

//    let len=req.body.data.length;
//    console.log(len);
//    res.send("cool")

//     const productSchema = new mongoose.Schema({
//         id: { type: String},
//         name: { type: String },
//         category: { type: String },
//         image: { type: String },
//         new_price:{ type: String },
//         old_price:{ type: String },
        
        
       

//     });
//     const Product = mongoose.model('Product_data', productSchema);

//       let resp= await Product.insertMany(req.body.data)


//     res.send("insert sucess fully ")
// })
app.listen(8000,()=>
{
    console.log("connected")
})