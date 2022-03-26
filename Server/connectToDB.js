const express = require("express")
const mongo = require('mongoose');
const {MONGO_URL} = require('./Key');


const connectToMongo = ()=>{
    mongo.connect(MONGO_URL,(err) =>{
        if(err){
            console.log(err);
        }
        else{
            console.log("database connected!");
        }
    })
} 

module.exports = connectToMongo;
