const express = require('express')
const router = express.Router()

const {
    getTeams,
    getOneTeam,
    updateOne
} = require('../controllers/teamsController')

const requireAuth = require('../middleware/requireAuth')

//GET all teams
router.get('/', getTeams)

router.use(requireAuth)

//GET 1 team
router.get('/:id', getOneTeam) 

//POST a new team
router.post('/', (req, res) => {
    res.json({mssg:'make one'})
}) 

//DELETE a team
router.delete('/:id', (req, res) => {
    res.json({mssg:'delete one'})
}) 

//PATCH a team
router.patch('/:name', updateOne) 

module.exports = router