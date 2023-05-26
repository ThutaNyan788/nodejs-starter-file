const notFound = (req,res)=> res.status(400).json({msg:"This route is not defined"});

module.exports = notFound;