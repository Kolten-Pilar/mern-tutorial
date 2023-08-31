const express = require('express');
const router = express.Router();
const { getGoals, setGoal, updateGoal, deleteGoal } = require('../controllers/goalController');
const { protect } = require('../middleware/authMiddleware');
//another way to write
//const goalController = require('../controllers/goalController');


// /api/goals routes
//group similar endpoints

//another way to write
//router.get('/', goalController.getGoals) || router.get('/', getGoals)
//create
//another way to write
//router.post('/', goalController.setGoal) || router.post('/', setGoal)
router.route('/')
.get(protect, getGoals)
.post(protect, setGoal)

//update
//another way to write
//router.put('/:id', goalController.updateGoal) || router.put('/:id', updateGoal)
//delete
//another way to write
//router.delete('/:id', goalController.deleteGoal) || router.delete('/:id', deleteGoal)
router.route('/:id')
.put(protect, updateGoal)
.delete(protect, deleteGoal)


module.exports = router;