const asyncHandler = require('express-async-handler');

const Goal = require('../models/goalModel');

// @desc: get goals
//@route: GET /api/goals
//access: private
const getGoals = asyncHandler(async (req, res) => {
  const goals = await Goal.find({})

  res.status(200).json(goals)
})

// @desc: create goal
//@route: POST /api/goals
//access: private
const setGoal = asyncHandler(async (req, res) => {
  if(!req.body.text) {
    res.status(400)
    throw new Error('Please enter text')
  }
  const goal = await Goal.create({
    text: req.body.text
  })

  res.status(200).json(goal)
})

// @desc: update goal
//@route: PUT /api/goals/:id
//access: private
const updateGoal = asyncHandler(async (req, res) => {
  // find a goal by id
  const goal = await Goal.findById(req.params.id)
  // check if goal exists
  if (!goal) {
      res.status(400)
      throw new Error('Goal Not Found')
  }
  // finding goal and updating it
  const updatedGoal = await Goal.findByIdAndUpdate(req.params.id, req.body, {new: true} )
  res.status(200).json(updatedGoal)
})
// @desc: delete goal
//@route: DELETE /api/goals/:id
//access: private
const deleteGoal = asyncHandler(async (req, res) => {
  // find a goal by id
  const goal = await Goal.findById(req.params.id)
  // check if goal exists
  if (!goal) {
      res.status(400)
      throw new Error('Goal Not Found')
  }

  await goal.findByIdAndDelete();

  res.status(200).json({id: req.params.id})
})

module.exports = {
  getGoals,
  setGoal,
  updateGoal,
  deleteGoal
}