const express= require('express')
const cors= require('cors')
const connect = require('./config/db')
const urlRoute= require('./routers/url.route')
const redirectRoute= require('./routers/redirect.route')
const app= express()
app.use(cors())
app.use(express.json())
app.use('/url',urlRoute)
app.use('/',redirectRoute)
app.get('/',(req,res)=>{
    res.send('Hello World!')
})

const start=async ()=>{
    await connect()
    console.log('Connected to mongo')
    app.listen(5000,()=>{
        console.log('Listening on port 5000')
    })
}

module.exports= start