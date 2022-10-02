const mongoose=require("mongoose")
mongoose.connect('mongodb+srv://surendra:mNXWK0EQF7jfuN9Z@cluster0.s9aehsc.mongodb.net/?retryWrites=true&w=majority').then((res)=>console.log('connected to db')).catch((err)=>console.log('err in connection'))
const schema=mongoose.Schema 
const flightSchema=new schema({
    flightNo:{
        type:Number,
        unique:true
    },
    origin:String,
    destination:String,
    departureDate:String,
    planeCategory:String
})
const flightModel=mongoose.model('flightDetails', flightSchema)
module.exports=flightModel