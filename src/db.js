const mongoose = require('mongoose');
const { MONGODB_URI } = require('./config');

(async () => {
  try {
    const db = await mongoose.connect(MONGODB_URI)
    console.log('Database connected to ' + db.connection.name);
  } catch (error) {
    console.log(error)
  }
})()
