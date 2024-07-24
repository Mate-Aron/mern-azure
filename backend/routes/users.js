const express = require('express');

const router = express.Router();

//controller functions
const { loginUser, signupUser, getOneUser, modifyOneUser } = require('../controllers/userController')

//login
router.post('/login', loginUser) 


//signup
router.post('/signup', signupUser)

//get one
router.get('/:email', getOneUser)

//szavazott true/false
router.patch('/voted/:email', modifyOneUser)

module.exports = router;