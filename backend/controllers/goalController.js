const asyncHandler = require('express-async-handler');

// @desc: get goals
//@route: GET /api/goals
//access: private
const getGoals = asyncHandler(async (req, res) => {
  res.status(200).json({message: 'Get goals'})
})

// @desc: create goal
//@route: POST /api/goals
//access: private
const setGoal = asyncHandler(async (req, res) => {
  if(!req.body.text) {
    res.status(400)
    throw new Error('Please enter text')
  }
  res.status(200).json({message: 'Set goal'})
  console.log(req.body);
})

// @desc: update goal
//@route: PUT /api/goals/:id
//access: private
const updateGoal = asyncHandler(async (req, res) => {
  res.status(200).json({message: `Update goal ${req.params.id}`})
}
)
// @desc: delete goal
//@route: DELETE /api/goals/:id
//access: private
const deleteGoal = asyncHandler(async (req, res) => {
  res.status(200).json({message: `Delete goal ${req.params.id}`})
})

module.exports = {
  getGoals,
  setGoal,
  updateGoal,
  deleteGoal
}