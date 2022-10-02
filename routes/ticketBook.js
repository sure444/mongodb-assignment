const express=require("express")
const Router=express.Router()
const ticketBookingModel=require("../models/ticketBookingModel")
const flightModel=require("../models/flightModel")
Router.post("/ticketBook", async (req, res)=>{
    const body=req.body
    const c=await flightModel.find({$and:[{"origin":body.origin}, {"destination":body.destination}, {"departureTime":body.departureTime}]}).count()
    console.log(c)
    if(c>0){
           const data=new ticketBookingModel({
            fname:body.fname,
            lname:body.lname,
            origin:body.origin,
            destination:body.destination,
            departureTime:body.departureTime,
            planeCategory:body.planeCategory,
            ticketBook:true
           })
           data.save().then((result)=>res.send("Booked Successfuly")).catch((err)=>console.log("err"))
    }
    else{
        res.send("No flight availlable")
    }
})
module.exports=Router