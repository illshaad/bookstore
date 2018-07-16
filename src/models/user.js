import mongoose from "mongoose";
// import { Schema } from "mongoose";
const Schema = mongoose.Schema
import bcrypt from "bcrypt";
import { Book } from './book'

// CONNEXION DE L'UTILISATIEUR 
const UserSchema = new Schema({
   email:{
       type:String,
       trim:true,
       unique:true,
       required:true
   },
   name:{
       type:String,
       trim:true,
       unique:true,
       required:true
   },
   favbook:{
       type:String,
       required:true,
       trim:true
   },
   password:{
       type:String,
       trim:true,
       required:true

   },

   books:[{type: Schema.Types.ObjectId, ref:'Book'}]
})
// authentification //

UserSchema.statics.authenticate = function(email, password, callback){
   User.findOne({email:email})
       .exec(function(err, user){
           if(err) {
               return callback(err);
           }else if (!user){
               var err= new Error ('User not found');
               err.status = 401;
               return callback(err);
           }
          bcrypt.compare(password, user.password, function(err, result){
              if(result=== true){
                  return callback(null, user);
              }else{
                  return callback()
              }
          })
       });
}
//SALAGE//
UserSchema.pre('save', function(next){
   const user = this;
   bcrypt.hash(user.password, 10, function(err, hash){
       if(err) return next(err)
       user.password = hash;
       next()
   })
})

const User = mongoose.model('User', UserSchema)
export { User }


