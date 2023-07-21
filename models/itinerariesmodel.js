const mongoose = require("mongoose")

const itinerariesSchema = new mongoose.Schema({
    cityId:{type:String, required:true},
    cityName:{type:String, required:true}, 
    nameItinerary:{type:String, required:true},
    descriptionItinerary:{type:String, required:true},
    activitiesOne:{type:String, required:true},
    activitiesOnePhoto:{type:String, required:true},
    activitiesTwo:{type:String, required:true},
    activitiesTwoPhoto:{type:String, required:true},
    activitiesThree:{type:String, required:true},
    activitiesThreePhoto:{type:String, required:true},
    userName:{type:String, required:true},
    userPhoto:{type:String, required:true},
    price:{type:String, required:true},
    duration:{type:String, required:true},
    hashtags:{type:String, required:true},
    likes:{type:Number, required:true},
})

const Itineraries = mongoose.model("MyTinerary.Itineraries", itinerariesSchema)
module.exports = Itineraries