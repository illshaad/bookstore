import express from 'express'
import mongoose from 'mongoose'
import { Book } from '../models/prods'

const bookRouter = express.Router()
 

bookRouter.get('/home',(req,res) => {//BASE DE DONNEE//
    Book.find({},(err, book) => {
        if(err) res.send(err)
        res.render('home', {book:book}) // recuperation les éléments de la basee de donnée.//
    })
})
bookRouter.get('/add',(req,res)=>{
    res.render('addBook')
})

bookRouter.post('/add',(req,res)=>{ //AJOUTER //
    const newBook = new Book(req.body)
    newBook.save((err,saveBook)=>{
        if(err) res.send(err)
        res.json(saveBook)
    })
})

bookRouter.get('/book:id',(req,res) => {
    let _id = req.params.id;
    Book.findById({_id}, (err, book)=>{
        if(err) res.send(err)
        res.json(book)
    })
})

bookRouter.put('/book:id', (req, res) => {
    Book.findById({_id:req.params.id}, (err, book) => {
        if(err) res.send(err)
        Object.assign(book, req.body).save((err,book) => {// METHODE es6 permet de recuperer afficher ton Schema 
            if(err) res.send(err)
            res.json({book});
        })
    })
})
bookRouter.delete('/book:id',(req,res)=>{
    let _id = req.params.id;
    Book.remove({_id}, (err, result)=>{
        if(err) res.send('err')
            res.send('effacer')
    })
})


export { bookRouter }