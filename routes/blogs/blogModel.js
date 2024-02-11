const db = require('../../config/db');
const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const blogSchema = new Schema({
    title: String,
    body: String,
    image: String,
    createdAt: {
        type: Date,
        default: Date.now
    }
});

const userSchema = new Schema({
    firstName: String,
    lastName: String,
    email: String,
    password: String
})

module.exports = {
    BlogModel: mongoose.model("Blog", blogSchema),
    UserModel: mongoose.model("User", userSchema)
}
