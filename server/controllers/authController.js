import express from "express";
import User from "../models/userModel.js";
import jwt from "jsonwebtoken"
import bcryptjs from "bcryptjs";


export async function Login(req, res){
  try{
    const {username, password} = req.body;
    if(!username || !password ){
       return res.status(400).json({message: "please fill the email and password"});
    }
    
    const validUser = await User.findOne({username});
         if(!validUser){
        return res.status(404).json({message: "user not found"})
         }

         const validPass = bcryptjs.compareSync(password, validUser.password);
         if (!validPass) {
            return res.status(400).json({message: "invalid password"})
         }

         const token = jwt.sign({id: validUser._id}, process.env.JWT_SECRET_KEY );
         res.status(200).cookie("access_token", token).json(validUser)
        
    } catch (error) {
        console.log(error);
        res.status(500).json(error.message)
    }
}


export async function Register (req, res) {
  const {username, email, password} = req.body;
    try {
      if (
        !req.body.username ||
        !req.body.email ||
        !req.body.password
      ) {
        return res.status(400).send({
         message: 'Send all required fields: title, author, image, description',
        });
      }
      
      const hashPass = bcryptjs.hashSync(password, 10);

      const newUser = new User({
        username,
        email,
        password: hashPass,
      });
     
      const user = await newUser.save();
  
      return res.status(201).send(user);
    } catch (error) {
      console.log(error.message);
      res.status(500).send({ message: error.message });
    }
  };


  export async function Logout(req, res){
    try {
      res
        .clearCookie('access_token')
        .status(200)
        .json('User has been signed out');
    } catch (error) {
      console.log(error)
    }
  };


  export async function getUsers(req, res){
    try {
      const Users = await User.find({});
      return res.status(200).json({
        countUsers: Users.length,
        data: Users,
      });
    } catch (error) {
      console.log(error);
      res.status(500).send({message: error.message})
    }
  }
  

