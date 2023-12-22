const express = require("express")
const mongoose = require("mongoose")
const url = "mongodb://localhost:27017/KiranChannel"

const app = express()
app.use(express.json())
mongoose.connect(url, {useNewUrlParser: true})

const con = mongoose.connection

con.on('open', ()=>{
    console.log("Connected...")
})

const userRoute = require("./routes/users")

app.use('/users', userRoute)

const primeRoute = require("./routes/prime")

app.use('/prime', primeRoute)

const port = process.env.PORT || 9000;
app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});
