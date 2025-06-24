const {Router} = require("express")
const messages = require("../messages")
const messageRouter = Router()
const links = require("../links")

messageRouter.get("/", (req, res)=>{
    res.render("index", { title: "Mini Messageboard", messages: messages, links:links })
})

messageRouter.post("/new", (req, res)=>{
    messages.push({ text: req.body.text, user: req.body.name, added: new Date() });
    res.redirect("/message")
})
module.exports = messageRouter;