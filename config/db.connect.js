const mongoose = require('mongoose')
require('dotenv').config() 
const connectToDb = () =>{
    mongoose.connect(
        `mongodb+srv://${process.env.DB_USER}:${process.env.DB_PASS}@cluster0.yjgwb.mongodb.net/plovex-playerDB?retryWrites=true&w=majority`,
        {
            useNewUrlParser:true,
            useUnifiedTopology:true
        }
    )
    .then(()=> console.log("Database successfully connected"))
    .catch( error => console.error("Database connection failed !", error))
}
module.exports = { connectToDb }