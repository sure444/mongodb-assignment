const express=require("express")
const app=express()
const bp=require("body-parser")
app.use(bp.json())
const createFlight=require("./routes/createFlight")
app.use('/', createFlight)
const ticketBook=require("./routes/ticketBook")
app.use('/', ticketBook)
const flightDetails=require("./routes/flightDetails")
app.use('/', flightDetails)
app.listen(8080, ()=>{console.log("Server Started")})
