const Router = require("express").Router()

const itinerariesControllers = require("../controllers/itinerariesControllers")
const {getAllItineraries, getOneItinerary, addManyItineraries, addOneItinerary, removeManyItineraries, removeItinerary, modifyItinerary, getOneItineraryByCityId} = itinerariesControllers

Router.route("/itineraries")
.get(getAllItineraries)
.post((req, res)=>(Array.isArray(req.body.data) ?addManyItineraries(req, res) :addOneItinerary(req,res)))
.delete(removeManyItineraries)

Router.route("/itineraries/:id")
.get(getOneItinerary)
.delete(removeItinerary)
.put(modifyItinerary)

Router.route("/itineraries/:cityId")
.get(getOneItineraryByCityId)

// Router.route("/allitineraries")
// .post(addAllitineraries)

module.exports = Router;