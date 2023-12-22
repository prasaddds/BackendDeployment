const express=require("express");
require('dotenv').config()
const app=express();
app.get("/",(req,res)=>{
    res.send("Hello");
})
app.get("/hello1",(req,res)=>{
    res.send("Hello1");
})
app.listen(process.env.PORT,()=>{
    console.log(`http://localhost:${process.env.PORT}`);
})