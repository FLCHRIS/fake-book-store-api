import mongoose from 'mongoose'

mongoose.connect(process.env.DATABASE_URL)
  .then(db => console.log('Database is connected'))
  .catch(error => console.log(error))
