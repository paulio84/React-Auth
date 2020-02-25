const uniqueValidator = require('mongoose-unique-validator');
const { mongoose } = require('../../common/mongodb.service');

const { Schema } = mongoose;

const userSchema = new Schema({
  username: { type: String, required: true, unique: true },
  email: { type: String, required: true, unique: true },
  password: { type: String, required: true }
});
userSchema.plugin(uniqueValidator);

const User = mongoose.model('Users', userSchema);

exports.CreateUser = (user) => new Promise((resolve, reject) => {
  User.create(user, (err, createdUser) => {
    if (err) reject(err);

    resolve(createdUser);
  });
});
