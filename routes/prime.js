const express = require("express")
const router = express.Router()

router.get("/", (req,res)=>{
    res.send("prime got it")
})

module.exports = router