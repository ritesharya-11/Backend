import validator from "validator"
import bcrypt from "bcrypt"
import userModel from "../models/userModel.js";

// Route for user login
const loginUser = async (req,res) =>{

}

// Routr for user register

const registerUser = async (req,res) => {
     
    try {
        
        const {name, email, password} = req.body;

        // checking user already exist or not
        const exists = await userModel.findOne({email});
        if(exists){
           return res.json({success:false, message:"User alredy exist "}) 
        }

        //  validating email format &nstrong password
        if(!validator.isEmail(email)){
            return res.json({success:false, message:"please enter the valid email"})
      }
    if(password.length < 8){
            return res.json({success:false, message:"Please enter astrong password"})
       }
       // hashing  user password



    } catch (error) {
        
    }

}

// Route for admin
const adminLogin = async (req,res) => {
    
}

export {loginUser,registerUser, adminLogin}