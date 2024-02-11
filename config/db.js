const mongoose = require('mongoose');
const uri = `mongodb://localhost/CRUD`;

 mongoose.connect(uri)
    .catch((err) => console.log('Failed to connect to MongoDB', err));


