const developersModel= require("../models/developersModel")
const batchModel= require("../models/batchModel")

const createDeveloper= async function (req, res) {
    let Developer = req.body
    let developerCreated = await developersModel.create(Developer)
    res.send({data: developerCreated})
}

const createBatch= async function (req, res) {
    let batch = req.body
    let batchCreated = await batchModel.create(batch)
    res.send({data: batchCreated})
}

const scholarship= async function (req, res) {
let developer = await developersModel.find({percentage:{$gte:70},gender:"Female"})
  res.send({data: developer})
}


const developers= async function (req, res) {
    let data= req.query.percentage
    let data1= req.query.program.enum
  
    let developer = await developersModel.find({percentage:{$gte:70},program:data1}).populate('batch')
    res.send(developer);
    }

    // const getdeveloperbatchpercentage= async function (req,res){
  //     let batchpercentage=  await developersModel.find({percentage:{$gte:55}}).populate('batch')//{select({percentage:{$gte:55}}))
  //     let batches= await batchpercentage.find({$and:[{percentage:{$gte:55}}]})
  //     res.send({msg:batches})
  //     console.log(batches);
  // }
  





module.exports.createDeveloper= createDeveloper

module.exports.createBatch= createBatch

module.exports.scholarship= scholarship

module.exports.developers= developers

// let num = "2000"
// console.log(num+19)
// let num2="2000"+15
//     num2=num2-15
//     console.log(num2)



//     console.log('10'-  '-4' -3)
//     console.log(11'-')