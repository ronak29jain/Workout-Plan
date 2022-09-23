const express = require('express')
const {
  allWorkouts,
  singleWorkout,
  newWorkout,
  deleteWorkout,
  updateWorkout
} = require('../controllers/workoutController')

const router = express.Router()

// Get all workouts
router.get('/', allWorkouts)

// Get a single workout
router.get('/:id', singleWorkout)

// Post a new workout
router.post('/', newWorkout)

// Delete a workout
router.delete('/:id', deleteWorkout) 

// Update a workout
router.patch('/:id', updateWorkout)

module.exports = router