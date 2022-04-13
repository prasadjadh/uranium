const BookModel= require("../models/bookModel")

const createBook= async function (req, res) {
    let data= req.body

    let savedBook= await BookModel.create(data)
    res.send({book: savedBook})
}

const getBooksData= async function (req, res) {
    let allBooks= await BookModel.find().select(  { bookName:1, authorName:1 ,_id:0 }  )
    res.send({msg: allBooks})
}


const getBooksInYear= async function (req, res) {
    let data= req.body
    let yearFilter= await BookModel.find(  { year:2021 }  )
    res.send({year: yearFilter})
}

const getParticularBooks= async function (req, res) {
    let condition = req.body
    let getParticular= await BookModel.find(condition)
    res.send({year: getParticular})
}

const getXINRBooks= async function (req, res) {
    let inrRupee= await BookModel.find( { "price.indianPrice":{$in:[100,200,500]} })
    res.send({inrBook: inrRupee})
}

const getRandomBooks = async function (req, res) {
    let random= await BookModel.find( { $or:[{stockAvailable:true},{totalPage:{$gt:500}}] })
    res.send({randomBook: random})
}
module.exports.createBook= createBook
module.exports.bookList=getBooksData
module.exports.getBooksInYear=getBooksInYear
module.exports.getParticularBooks=getParticularBooks
module.exports.getXINRBooks=getXINRBooks
module.exports.getRandomBooks=getRandomBooks
