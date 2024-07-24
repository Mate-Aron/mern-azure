// const express = require('express');
// const cors = require('cors');
// require("./db/config");
// const User = require("./db/User");
// const Team = require("./db/Team");
// const app = express();

// app.use(express.json());
// app.use(cors());

// app.post("/register", async (req, resp) => {
//         let user = new User(req.body);
//         let result = await user.save();
//         result = result.toObject();
//         delete result.password;
//         resp.send(result);   
// })

// app.post("/login", async (req, resp) => {
//     if(req.body.password && req.body.email){
//         let user = await User.findOne(req.body).select("-password");
//         if(user){
//             resp.send(user);
//         }else{
//             resp.send({result: "Nincs ilyen felhasználó!"});
//         }
//     }else{
//         resp.send({result: "Nincs ilyen felhasználó!"});
//     }   
// })

// app.get("/teams", async (req, resp) => {
//     const teams = await Team.find();
//     if(teams.length > 0){
//         resp.send(teams);
//     }else{
//         resp.send({result: "No team found!"});
//     }
// })

// app.listen(5000);

require('dotenv').config()
const express = require('express');
const mongoose = require('mongoose');

const teamRoutes = require('./routes/teams')
const userRoutes = require('./routes/users')


//express
const app = express();

//middleware
app.use(express.json())

app.use((req, res, next) => {
    console.log(req.path, req.method)
    next()
})

//routes
app.use('/api/teams', teamRoutes)
app.use('/api/user', userRoutes)


//connect to mongo
mongoose.connect(process.env.MONGO_URI)
    .then( () => {
        //listen for requests
        app.listen(process.env.PORT, () => {
            console.log('connected to db & listening on PORT:', process.env.PORT)
        })     
    })
    .catch( (error) => { 
        console.log(error)
    })
 

