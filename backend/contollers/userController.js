const jwt = require('jsonwebtoken')
const bcrypt = require('bcryptjs')
const asyncHandler = require(express-async-handler)

const registerUser = asyncHandler(async (req, res) => {
    res.json({message: 'Register User'})
})

const loginUser = asyncHandler(async (req, res) => {
    res.json({message: 'login User'})
})

const getMe = asyncHandler(async (req, res) => {
    res.json({message: 'get me User'})
})

module.exports = {
    registerUser, loginUser, getMe
}