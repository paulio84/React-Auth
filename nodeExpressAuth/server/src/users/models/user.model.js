const uniqueValidator = require('mongoose-unique-validator');
const { mongoose } = require('../../common/mongodb.service');

const { Schema } = mongoose;

const userSchema = new Schema({
  username: { type: String, required: 'Username is required.', unique: true },
  email: {
    type: String,
    required: 'Email is required.',
    unique: true,
    match: [/\S+@\S+\.\S+/, '"{VALUE}" is invalid.']
  },
  password: { type: String, required: 'Password is required.' }
});
userSchema.plugin(uniqueValidator, { message: '"{VALUE}" is already taken.' });

const User = mongoose.model('Users', userSchema);

exports.FindByEmail = (email) => new Promise((resolve, reject) => {
  User.findOne({ email }, ((err, user) => {
    if (err) reject(err);

    resolve(user);
  })).orFail();
});

exports.CreateUser = (user) => new Promise((resolve, reject) => {
  User.create(user, (err, createdUser) => {
    if (err) reject(err);

    resolve(createdUser);
  });
});
