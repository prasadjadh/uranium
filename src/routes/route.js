const express = require('express');
const lodash = require('lodash');
const logger = require('../logger/logger.js')
const util = require('../util/helper.js')
const validator = require('../validator/formatter.js')
const router = express.Router();

router.get('/test-me', function (req, res) {
    logger.abc()
    util.printMonth()
    validator.pro()
    res.send('My first ever api!')
});


router.get('/hello', function (req, res) {
    const x = [1, 3, 5, 7, 9, 11, 13, 15, 17, 19]
  
     const newArray = lodash.tail(x);
  
     console.log(newArray);

     const y = [ "January", "February", "March", "April", "May", "June", 

                "July", "August", "September", "October", "November", "December"];

            console.log(lodash.chunk(y, 4))



    const gfg = lodash.union ([20, 12], [8, 15, 6] ,[18, 22, 13, 15], [7,32,14], [18, 13]);


    console.log(gfg)

    let pairs = [ ["horror","The Shining"], ["drama","Titanic"],["thriller","Shutter Island"],["fantasy","Pans Labyrinth"] ]

    let obj = lodash.fromPairs(pairs);
      
    console.log(obj)



    res.send('My second ever api!')
});

module.exports = router;
// adding this comment for no reasonsss