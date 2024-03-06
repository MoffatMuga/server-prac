const express = require('express')
const router = express.Router()
const {getGoals, updateGoals, deleteGoals, setGoals} = require('../contollers/goalController')

router.route('/').get(getGoals).post( setGoals)


router.route('/:id').put(updateGoals).delete(deleteGoals)


module.exports = router

