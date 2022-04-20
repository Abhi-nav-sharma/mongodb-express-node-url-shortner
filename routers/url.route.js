const express= require('express')
const validUrl= require('valid-url')
const shortid= require('shortid')
const Url = require('../models/url.model')
const router= express.Router()

const baseUrl= 'http:localhost:5000'
router.post('/shorten', async(req,res)=>{
    const longUrl= req.body.longUrl

    if(!validUrl.isUri(baseUrl)){
        return res.status(401).json('Invalid base URL')
    }

    const urlCode= shortid.generate()

    if(validUrl.isUri(longUrl)){
        try{
            let url= await Url.findOne({
                longUrl
            })
            if(url){
                res.json(url)
            }else{
                const shortUrl= baseUrl+'/'+urlCode
                url= await Url.create({
                    longUrl,
                    shortUrl,
                    urlCode,
                    date:new Date()
                })
                res.json(url)
            }
        }
        catch(err){
            console.log(err)
            res.status(500).json('Server Error')
        }
    }
    else {
        res.status(401).json('Invalid longUrl')
    }
})
module.exports= router