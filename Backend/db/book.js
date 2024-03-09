const mongoose = require("mongoose");

const bookSchema = new mongoose.Schema({
    title:String,
    desc:String,
    stock:Number,
    price:String,
    category:String,
    imgURL:String,
    pdfBook:String
} );

module.exports=mongoose.model("books" , bookSchema)