require('dotenv').config()

const express = require('express')
const mongoose = require('mongoose')
const WorkoutRoutes = require('./routes/workouts')

// express app 
const app  = express()

//middleware
app.use(express.json())
app.use((req, res, next) => {
  console.log(req.path, req.method)
  next();
})



// routes
app.get('/', (req, res) => {
  res.json({ mssg:"welcome to the app" })
})

app.use('/api/workouts',WorkoutRoutes);



// connect to db
mongoose.connect(process.env.MONGO_URI)
  .then(() => {
    // listen to requests/prot 
    app.listen(process.env.PORT, () => {
      console.log('connected to db & listening to port', process.env.PORT)
    })
  })
  .catch((error) => {
    console.log(error)
  })

