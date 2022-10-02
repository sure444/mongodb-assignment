const express=require("express")
const Router=express.Router()
const  flightModel=require("../models/flightModel")
Router.post("/createFlight", (req, res)=>{
    const data=req.body
    const flightData=new flightModel({
        flightNo:data.flightNo,
        origin:data.origin,
        destination:data.destination,
        departureTime:data.departureTime,
        planeCategory:data.planeCategory
    })
    flightData.save().then((result)=>res.send("flight addedd successfully")).catch((err)=>console.log(err))
})
module.exports=Router