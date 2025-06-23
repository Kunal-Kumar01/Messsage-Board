const {Router} = require("express")

const indexRouter = Router();

indexRouter.get("/", (req, res)=>{
    res.send("index endpoint got hit")
})

module.exports = indexRouter