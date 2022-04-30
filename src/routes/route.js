const express = require('express');
const router = express.Router();
const CowinController= require("../controllers/cowinController")
const WeatherController = require('../controllers/weatherController')
const MemeController = require('../controllers/memeController')

router.get("/test-me", function (req, res) {
    res.send("My first ever api!")
})


router.get("/cowin/states", CowinController.getStates)
router.get("/cowin/districtsInState/:stateId", CowinController.getDistricts)
router.get("/cowin/getByPin", CowinController.getByPin)

router.post("/cowin/getOtp", CowinController.getOtp)
router.get('/sessionsByDistrict', CowinController.sessionsByDistrict)

// getWeather, tempOfLondon, tempOfCities
router.get('/getWeather', WeatherController.getWeather)
router.get('/tempOfLondon', WeatherController.tempOfLondon)
router.get('/tempOfCities', WeatherController.tempOfCities)


router.get('/getMemes', MemeController.getMemes )
router.post('/createMemes', MemeController.createMemes)

// WRITE A GET API TO GET THE LIST OF ALL THE "vaccination sessions by district id" for any given district id and for any given date



module.exports = router;