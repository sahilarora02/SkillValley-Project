const express = require("express");
const user = require("../models/user");


module.exports={

UserRegistration
} ;




async function UserRegistration(req, res, next) {
  
    try {

      const data = await user.create({
       Name:req.body.Name,
       Email:req.body.Email,
       Password:req.body.Password,
       ContactNo:req.body.ContactNo

      });
              console.log("data->",data);
  
      return res.status(200).json("Register Succesfully");
    } catch (error) {
      console.log("error : ", error);
      return next(error);
    }
  }
