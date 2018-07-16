import express from 'express'
import { prods } from '../models/prods'
const booksRouter = express.Router()
//doc multer
import multer from "multer"
var storage = multer.diskStorage({
  destination: function (req, file, cb) {
    cb(null, './public/uploads/')
  },
  filename: function (req, file, cb) {
    cb(null, Date.now()+ '-' +file.originalname)
  }
})

const upload = multer({ storage: storage }).single("img")

booksRouter.get('/', (req, res) => {
  Book.find({}, (err, books)=> {
    if(err) console.log(err)
    res.render("AfficheBook", {
      books
    })
  })
})

booksRouter.get('/add', (req, res) => {
  res.render('add')

})

booksRouter.post('/add', upload, (req, res) => {
  const datas = req.body
  datas["img"]= req.file.filename//recuperer la clef img dans l'objet datas(form)
  const newBook = new Book(datas)
  newBook.save((err, book) => {
    if(err) res.send(err)
    res.redirect("/book")
  })
})

export { booksRouter }