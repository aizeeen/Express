import express from "express"
import mongoose from "mongoose";

const app = express()
const port = 5000;

mongoose.connect("mongodb://127.0.0.1:27017/test")
.then(() => console.log("MongoDB Connected"))

app.get ('/', (req, res) => {
    res.send("hello world")

})

app.listen(port, () => {
    console.log("Server running at" + port)
})