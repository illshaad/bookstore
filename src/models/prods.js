import mongoose from 'mongoose'
const Schema = mongoose.Schema;

const BookSchema = new Schema({
   title : {type: String, index:true},
   author: {type :String,index : true},
   editor: String,
   genre : String,
   price: Number,
   page: Number,
   cover:String,
   users:[{type: Schema.Types.ObjectId, ref:'User'}]
})

const Book = mongoose.model('Book', BookSchema)

export {Book}

//AJOUTER DES LIVRES//