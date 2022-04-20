const mongoose= require('mongoose')

const connect= ()=>{
    return mongoose.connect("mongodb://localhost:27017/url_shortner")
}

module.exports= connect