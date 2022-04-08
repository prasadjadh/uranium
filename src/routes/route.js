const express = require('express');
const logger = require('./logger')

const router = express.Router();

 router.get('/movies', function(req, res) {
        // console.log(req)
        let arrMovies = ['rand de basnasti', 'the shining', 'lord of the rings', 'bartman begins']
        
        res.send(arrMovies)
    })

    router.get('/movies/:indexNumber', function(req, res) {
        // console.log(req)
       const arrMovies = ['rand de basnasti', 'the shining', 'lord of the rings', 'bartman begins']
       const i = req.params.indexNumber
        
        if (i<arrMovies.length){
            res.send(arrMovies[i])
        }else{
            res.send('invalid index')
        }
    })


    router.get('/films', function(req, res) {
        // console.log(req)
        let arrMovies =[ {
            'id': 1,
            'name': 'The Shining'
           }, {
            'id': 2,
            'name': 'Incendies'
           }, {
            'id': 3,
            'name': 'Rang de Basanti'
           }, {
            'id': 4,
            'name': 'Finding Nemo'
           }]
           
        res.send(arrMovies)
    })

    router.get('/films/:filmId', function(req, res) {
        // console.log(req)
        let arrMovies =[ {
            'id': 1,
            'name': 'The Shining'
           }, {
            'id': 2,
            'name': 'Incendies'
           }, {
            'id': 3,
            'name': 'Rang de Basanti'
           }, {
            'id': 4,
            'name': 'Finding Nemo'
           }]
           let filmId = req.params.filmId
        for(let i=0; i<arrMovies.length; i++){
           if(arrMovies[i].id == filmId){
               res.send(arrMovies[i])
               break;
           }
             
        } 
        res.send('No movie exists with this id')
    })







// router.get('/user-profile/:abcd', function(req, res) {
//     // console.log(req)
//     console.log(req.params.abcd)
//     res.send('dummy response')
// })

// router.get('/test-me', function (req, res) {
//     // console.log('------------------')
//     // console.log(req)
//     // console.log('------------------')
//     console.log('These are the request query parameters: ', req.query)
//     res.send('My first ever api!')
// });




module.exports = router;
// adding this comment for no reason