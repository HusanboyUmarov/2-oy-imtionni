const jwt =  require("jsonwebtoken")
const config = require("../../config")
const secret_key = config.secret_key
const isAdmin = async(req,res, next)=>{
    const  auth = req.headers.authorization.split(' ')
    try{
        return jwt.verify(auth[1]?auth[1]:auth[0], secret_key, function(err, decoded) {
            if (err) {
                return res.json({
                    success: false,
                    message: "Failed to authenticate token.",
                });
            }
            req.user = decoded;
            return next();
        });

    }catch(er){
        console.log(er.message)
    }

    
   
}
module.exports = isAdmin;