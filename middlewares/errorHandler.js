
let CustomAPIError = require("../errors/custom-error");

let errorHandler = (err,req,res,next)=>{
    if(err instanceof CustomAPIError){
        return res.status(err.statusCode).json({msg:err.message});
    }

    return res.status(500).json({msg:"Something went Wrong"});
}

module.exports = errorHandler;