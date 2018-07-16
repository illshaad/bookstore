import express from 'express'
const userRoute = express.Router();
import { User } from '../models/user';

userRoute.get('/login', (req,res,next)=>{
   res.send('ok')
})

userRoute.post('/login', (req,res,next)=>{
   if(req.body.email && req.body.password){
       User.authenticate(req.body.email && req.body.password, function(err, user){
           if(err|| !user){
               var err = new Error ('Wrong email or password');
               err.status = 401;
               return next(err);
           }else{
               req.session.userId = user._id;
               return res.redirect('/profil');
           }
       })
   }else{
        var err = new Error('Email and password are required');
        err.status = 401;
        return next(err)
   }
});

userRoute.get('/register', (req, res, next)=>{
   res.render('register')
   
})

userRoute.post('/register', (req, res, next)=>{
   const userData = new User(req.body)
   userData.save((err, user)=>{
       if (err){
        next('err')
       }else{
           req.session.userId = user._id
           console.log(user);
           res.redirect('/profil')
           
       }
       
   })
})






export { userRoute }
