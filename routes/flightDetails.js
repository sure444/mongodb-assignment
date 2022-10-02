const express=require("express")
const Router=express.Router()
const flightModel=require("../models/flightModel")
Router.get("/flightDetails", async (req, res)=>{
    const details=await flightModel.find()
    res.send(details)
})
module.exports=Router