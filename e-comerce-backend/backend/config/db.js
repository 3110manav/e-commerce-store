require('dotenv').config()
const mongoose = require('mongoose')

const connectDB = async () => {
  try {
    await mongoose.connect(
      process.env.MONGO_URI || 'mongodb+srv://admin:admin@cluster0.mgpxbr1.mongodb.net/?retryWrites=true&w=majority',
      {
        useNewUrlParser: true,
        useUnifiedTopology: true,
      },
    )

    console.log('MongoDB connection SUCCESS')
  } catch (error) {
    console.log(error);
    console.error('MongoDB connection FAIL')
    process.exit(1)
  }
}

module.exports = {connectDB}
