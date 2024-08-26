
const webtoken = require('jsonwebtoken')
const User = require('../models/user')

const auth = async(req,res,next) =>{
    try{
        const token = req.header('Authorization').replace('Bearer ','')
        const decode = webtoken.verify(token,'SHAMIR22')
        const user = await User.findOne({_id:decode._id,tokens:token})
        if(!user){
            throw new Error()
        }
        req.user = user
        req.token = token
        next()
    }
    catch(e){
        res.status(401).send({error:'Please authenticate'})
    }
}
module.exports = auth