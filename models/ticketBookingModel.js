const mongoose=require("mongoose")
mongoose.connect('mongodb+srv://surendra:mNXWK0EQF7jfuN9Z@cluster0.s9aehsc.mongodb.net/?retryWrites=true&w=majority').then((res)=>console.log('connected to db')).catch((err)=>console.log('err in connection'))
 const schema=mongoose.Schema 
 const ticketBookingSchema=new schema({
    fname:String,
    lname:String,
    origin:String,
    destination:String,
    departureTime:String,
    planeCategory:String,
    ticketBook:Boolean
 })
 const ticketBookingModel=mongoose.model('ticketBookings', ticketBookingSchema)
 module.exports=ticketBookingModel