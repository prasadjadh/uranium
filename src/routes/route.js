const express = require('express');
const router = express.Router();


const developersController= require("../controllers/developersController")

router.get("/test-me", function (req, res) {
    res.send("My first ever api!")
})

router.post("/batches", developersController.createBatch  )

router.post("/developers", developersController.createDeveloper  )

router.get("/scholarshipDevelopers", developersController.scholarship)

router.get("/developersDetails", developersController.developers)


module.exports = router;