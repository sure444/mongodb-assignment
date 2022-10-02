const express=require("express")
const app=express()
const bp=require("body-parser")
app.use(bp.json())

app.listen(8080, ()=>{console.log("Server Started")})