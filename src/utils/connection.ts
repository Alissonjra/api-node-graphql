import mongoose from 'mongoose'

mongoose.connect(`mongodb+srv://${process.env.DB_USER}:${process.env.DB_PASSWORD}@cluster0.mqztz.mongodb.net/${process.env.DB_DATABASE}?retryWrites=true&w=majority`,{
  useNewUrlParser:true,
  useUnifiedTopology:true,
})