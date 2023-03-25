const express = require('express')
// const mongoose = require('mongoose')
const jwt = require('jsonwebtoken')
const User = require('../models/user');
const bcrypt = require('bcryptjs');
const {SECRET_KEY} = require('../Key');
const nodemailer = require('nodemailer');
const fetchUser = require('../middlewear/JWTverify');
const router = express.Router();

router.post('/signup',async(req,res) =>{
    const {email,name,password} = req.body;

    try {
        success = false;

        if (!name || !email || !password) 
            return res.status(400).json({ success, msg: "all fiels require" })
        
        const olduser = await User.findOne({email});
        if(olduser) return res.status(422).json({success,mes:"user already exist"});

        const encryptPass = await bcrypt.hash(password,10);
        const user = ({
            name,email,password:encryptPass 
        });
        
        // await user.save();
        success = true;
        res.status(201).json({success,mes:user});

    } catch (error) {
        console.log(error);
        // return res.status(401).json("internal server error");
    }
})

router.post('/login',async(req,res) => {
    const {email,password} = req.body;

    try {
        success = false;
        if (!email || !password) 
            return res.status(400).json({ success, msg: "all fiels require" })
        
        const isUserExist = await User.findOne({email});
        if(!isUserExist) return res.status(422).json({success,mes:"first signup"})

        const hashPass = await bcrypt.compare(password,isUserExist.password);
        if(!hashPass) return res.json({success,mes:"invalid details"});

        const token = jwt.sign({
            id:isUserExist._id,
            email:isUserExist.email,
            name:isUserExist.name
        },SECRET_KEY);
        success=true;
        return res.json({success,mes:token});

    } catch (error) {
        console.log(error);
        // return res.json({error});
    }
})

router.post("/getotp",(req,res) => {

    const {to,name} = req.body;

    const otp = Math.floor(Math.random()*(99999-10000)-10000);
const transporter = nodemailer.createTransport({
    service:"gmail",
    auth:{
        user:"thakurajul8888@gmail.com",
        pass:""
    }
});

const options = {
    from:'thakurajul8888@gmail.com',
    to:to,
    subject:"OTP to singing into dsa solver",
    text: `Hello ${name}
           your otp is : ${otp}`
};

transporter.sendMail(options,(err,info) => {
    if(err){
        console.log(err);
        // return res.status(401).json({err});
        }
    else return res.status(201).json({otp});
})
}
)

router.post('/saveuser',async(req,res) => {
    const {name,email,password} = req.body;

    try {
        
        const user = new User({
            name,email,password
        })
        await user.save();
        return res.status(201).json({success:true,mes:user});
    } catch (error) {
        console.log(error)
        // return res.json({error});
    }
})

router.get("/details",fetchUser,(req,res) => {
      res.json({mes:req.userData});
})
module.exports = router
