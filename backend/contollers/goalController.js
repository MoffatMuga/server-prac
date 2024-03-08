const asyncHandler = require('express-async-handler')

const Goal = require("../models/product.model")
//Get Goals
//route GET 'api/goals'
const getGoals = asyncHandler(async (req, res) => {

    const goal = await Goal.find()
    res.status(200).json(goal)
})

//Set Goals
//route POST 'api/goals'
const setGoals = asyncHandler(async (req, res) => {

    if(!req.body.text){
        res.status(400)
        throw new Error('Please add a text field')
    }

    const goal = await Goal.create({
        text: req.body.text
    })
    res.status(200).json(goal)
})

//update Goals
//route PUT 'api/goals/:id'
const updateGoals = asyncHandler(async (req, res) => {

    const goal = await Goal.findById(req.params.id)
    if(!goal){
        res.status(400)
        throw new Error('goal not found')
    }

    const updatedGoal = await Goal.findByIdAndUpdate(req.params.id, req.body, {new:true}, )
    res.status(200).json(updatedGoal)
})

//Delete Goals
//route DELETE 'api/goals/:id'
const deleteGoals = asyncHandler(async (req, res) => {
    try {
        const goal = await Goal.findById(req.params.id);
        
        if (!goal) {
            res.status(404).json({ error: 'Goal not found' });
            return;
        }

        await goal.deleteOne();
        res.status(200).json({ success: true });
    } catch (error) {
        console.error('Error deleting goal:', error);
        res.status(500).json({ error: 'Internal server error' });
    }
});


module.exports = {
    getGoals, updateGoals, deleteGoals, setGoals
}