const mongoose= require('mongoose')
const URLSchema= new mongoose.Schema({
    urlCode: String,
    longUrl:String,
    shortUrl:String,
    date:{
        type:String,
        default: Date.now
    }
})

const Url= mongoose.model('Url',URLSchema)

module.exports= Url
// The values include:

// The urlCode is a string property that will store the unique ID related to each URL.

// The longUrl is the default URL which we need to shorten.

// The property shortUrl is the actual short URL that will be generated.

// The date property has a default property and is created once the model is instantiated in the database.