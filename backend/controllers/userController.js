const User = require('../db/User')
const jwt = require('jsonwebtoken')

const createToken = (_id) => {
    return jwt.sign( {_id}, process.env.SECRET, {expiresIn: '1d'} )
}
//login user
const loginUser = async (req, res) => {
    const { email, password } = req.body

    try{
        const user = await User.login(email, password)

        //jwt create
        const token = createToken(user._id)

        res.status(200).json({email, token})
    }catch(error){
        res.status(400).json({error: error.message})
    }
}

//signup user
const signupUser = async (req, res) => {
    const { email, password, name } = req.body

    try{
        const user = await User.signup(email, password, name)

        //jwt create
        const token = createToken(user._id)

        res.status(200).json({email, token})
    }catch(error){
        res.status(400).json({error: error.message})
    }
}

//get this user
const getOneUser = async (req, res) => {
    const {email} = req.params

    try{
        const user = await User.findOne({email})
        if(!user){
            return res.status(404).json({error:'Nincs felhasználó'})
        }
        res.status(200).json(user)
    }catch(error){
        res.status(400).json({error: error.message})
    }
   
}

//update
const modifyOneUser = async (req, res) => {
    const {email} = req.params
    if(!email){
        return res.status(404).json({error:'Nincs ilyen felhasználó.'})
    }
    try{
        const result = await User.findOneAndUpdate(
            { email: email },
            { $set: {isvoted: true} },
            { new: true }
        );

        if (!result) {
            return res.status(404).json({ error: 'Sikertelen szavazás.' });
        }

        res.status(200).json(result);
    }catch(error){
        res.status(400).json({error: error.message})
    }
   
}
module.exports = {
    loginUser,
    signupUser,
    getOneUser,
    modifyOneUser
}