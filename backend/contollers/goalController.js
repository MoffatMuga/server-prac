const asyncHandler = require('express-async-handler')
//Get Goals
//route GET 'api/goals'
const getGoals = asyncHandler(async (req, res) => {
    res.status(200).json( { message: 'Get goals' } )
})

//Set Goals
//route POST 'api/goals'
const setGoals = asyncHandler(async (req, res) => {

    if(!req.body.text){
        res.status(400)
        throw new Error('Please add a text field')
    }
    res.status(200).json( { message: 'Post goals' })
})

//update Goals
//route PUT 'api/goals/:id'
const updateGoals = asyncHandler(async (req, res) => {
    res.status(200).json( { message: `Update goals ${req.params.id}`})
})

//Delete Goals
//route DELETE 'api/goals/:id'
const deleteGoals = asyncHandler(async (req, res) => {
    res.status(200).json( { message: `Delete goals ${req.params.id}`})
})

module.exports = {
    getGoals, updateGoals, deleteGoals, setGoals
}