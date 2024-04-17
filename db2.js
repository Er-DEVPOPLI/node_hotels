const mongoose = require('mongoose');

// MongoDB connection URI
const uri = 'mongodb://localhost:27017/';

// Connect to MongoDB
mongoose.connect(uri, {
  useNewUrlParser: true,
  useUnifiedTopology: true
}).then(() => {
  console.log('Connected to MongoDB');
}).catch((error) => {
  console.error('Error connecting to MongoDB:', error);
});

// You can define your Mongoose schema and models here
 