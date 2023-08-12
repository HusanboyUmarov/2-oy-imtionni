const config = require("../../config")
const Io = require("../utils/Io")
const io = new Io(process.cwd()+"/database/Admin.json")
const secret_key = config.secret_key;
const jwt = require("jsonwebtoken");

const checkAdmin =async(req, res)=>{
    const data = await io.read()

    const {password, username} = req.body
    if(password == data.password && data.username == username){
        const Token = jwt.sign(data.id, secret_key)
        res.status(201).json({token :`${Token}`})
       

    }
    else
    return res.status(401).json({message: "Invalid username or password, please check it, and try again"})
    

}

module.exports = checkAdmin;