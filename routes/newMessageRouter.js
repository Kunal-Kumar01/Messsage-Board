const {Router} = require("express")

const messageRouter = Router()

messageRouter.get("/", (req, res)=>{
    res.send("new message endpoint got hit")
})

module.exports = messageRouter;