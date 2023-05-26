require("dotenv").config();
require("express-async-errors");

let express = require("express");
let app = express();

let notFound = require("./middlewares/not-found");
let errHandler = require("./middlewares/errorHandler");
const CustomAPIError = require("./errors/custom-error");
const dbConnect = require("./db/connect");


app.get("/",(req,res)=>{
    return res.send("Hello Home Page");
});

app.use(notFound);
app.use(errHandler);

let port = process.env.PORT || 5000;

app.listen(port,async (req,res)=>{
    try{
        await dbConnect(process.env.MONGO_URL);
        console.log(`This port is running at Port:${port}`);
    }catch (err){
        console.log(err.message);
    }
})