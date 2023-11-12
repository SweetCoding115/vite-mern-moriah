import mongoose from 'mongoose'

const connectionString = process.env.ATLAS_URI || ''

// mongoose
//   .connect(connectionString, {
//     useNewUrlParser: true,
//     useUnifiedTopology: true,
//   })
//   .then(() => {
//     console.log('Connected to MongoDB')
//   })
//   .catch((error) => {
//     console.error('Error connecting to MongoDB', error)
//   })

main().catch(err => console.log(err));

async function main() {
  await mongoose.connect('mongodb://127.0.0.1:27017/test');

  // use `await mongoose.connect('mongodb://user:password@127.0.0.1:27017/test');` if your database has auth enabled
}