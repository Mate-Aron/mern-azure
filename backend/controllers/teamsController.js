const Teams = require('../db/Team')
const mongoose = require('mongoose')

//GET all teams
const getTeams = async (req, res) => {
    const teams = await Teams.find({})
    res.status(200).json(teams)
}

//GET 1 team
const getOneTeam = async (req, res) => {
    const {id} = req.params

    if(!mongoose.Types.ObjectId.isValid(id)){
        return res.status(404).json({error:'No team found'})
    }

    const team = await Teams.findById(id)
    if(!team){
        return res.status(404).json({error:'No team found'})
    }
    res.status(200).json(team)
}

//POST a new team


//DELETE a team


//PATCH a team
const updateOne = async (req, res) => {
    const { name } = req.params

    if(!name){
        return res.status(404).json({error:'No team name found'})
    }

    const result = await Teams.findOneAndUpdate(
        { name: name },
        { $inc: { votes: 1 } },
        { new: true }
    );
    if (!result) {
        return res.status(404).json({ error: 'Team not found' });
    }
    res.status(200).json(result);
} 


module.exports = {
    getTeams,
    getOneTeam,
    updateOne
}