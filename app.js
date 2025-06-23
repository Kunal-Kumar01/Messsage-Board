const express = require("express")
const indexRouter = require("./routes/indexRouter")
const messageRouter = require("./routes/newMessageRouter")

const app = express()

app.use("/", indexRouter)
app.use("/message", messageRouter)



app.get("/", (req,res)=>{
    res.send("hello world")
})

port = 3001

app.listen(port,()=>{
    console.log("Server is up and running")
})