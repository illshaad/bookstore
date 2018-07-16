import express from 'express'
import 'dotenv/config';
import mongoose from 'mongoose';
import volleyball from 'volleyball'
import pug from 'pug'
import session from 'express-session'
import path from 'path' 
import {bookRouter} from './routes/route'
const app = express()
const {PORT,DB_url} = process.env;


mongoose.connect(DB_url);
var db = mongoose.connection;
db.on('error', console.error.bind(console, 'connection error:'));
db.once('open', function() {
console.log('Ca marche') // c'est pour tester la connection de mangodb avec un message d'erreur //
});

//PUG//
app.set('views', path.join(__dirname, 'views')); // ECRIRE CETTE LIGNE EN PREMIERE AVANT DE METTRE DU PUG//
app.set('view engine', 'pug');
app.use(express.static( path.join(__dirname, "../public")))




app.use(express.json())
app.use(express.urlencoded({extended : false}))
app.use(volleyball);
app.use("/", bookRouter)



app.listen(PORT,() =>{
    console.log(`test!:${PORT}`)
})