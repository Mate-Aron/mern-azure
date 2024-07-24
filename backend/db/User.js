const mongoose = require('mongoose');
const bcrypt = require('bcrypt')
const validator = require('validator')

const userSchema = new mongoose.Schema({
    email:{
        type:String,
        required:true,
        unique:true
    },
    isvoted:Boolean,
    type:String,
    name:{
        type:String,
        required:true
    },
    password:{
        type:String,
        required:true
    }
});

//static signup
userSchema.statics.signup = async function(email, password, name) {

    if(!email || !password || !name){
        throw Error ('Az összes mezőt töltse ki.')
    }
    if(!validator.isEmail(email)){
        throw Error('Az email nem valid.')
    }
    if(!validator.isStrongPassword(password)){
        throw Error('A jelszó nem elég biztonságos.')
    }
    

    const exists = await this.findOne({ email })
    if(exists){
        throw Error('Ez az email már létezik')
    }

    const salt = await bcrypt.genSalt(10)
    const hash = await bcrypt.hash(password, salt)

    const user = await this.create({email, password: hash, isvoted: false, type: "User", name})

    return user
}

//static login
userSchema.statics.login = async function(email, password){
    if(!email || !password){
        throw Error ('Az összes mezőt töltse ki.')
    }

    const user = await this.findOne({ email })
    if(!user){
        throw Error('Helytelen email.')
    }

    const match = await bcrypt.compare(password, user.password)
    if(!match){
        throw Error('Helytelen jelszó.')
    }

    return user
}


module.exports = mongoose.model("Profil", userSchema, "Profil");