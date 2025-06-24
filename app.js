const express = require("express")
const path = require("node:path")
const indexRouter = require("./routes/indexRouter")
const messageRouter = require("./routes/newMessageRouter")
const newRouter = require("./routes/new")

const app = express()

app.use(express.urlencoded({ extended: true }));


app.set("views", path.join(__dirname, "views"))
app.set("view engine", "ejs")

app.use("/", indexRouter)
app.use("/message", messageRouter)
app.use("/new", newRouter)



app.get("/", (req,res)=>{
    res.send("hello world")
})

port = 3001

app.listen(port,()=>{
    console.log("Server is up and running")
})