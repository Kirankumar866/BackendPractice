const express = require("express")
const router = express.Router()
const User = require("../models/user")

router.get("/register", async(req,res)=>{
    try{
        const users = await User.find()
        res.json(users)
        console.log(users)
    }catch(err){
        res.send("error" + err)
    }
    
    
})

module.exports = router