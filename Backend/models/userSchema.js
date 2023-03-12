const mongoose = require('mongoose')
const bcrypt = require('bcrypt')


const userSchema = new mongoose.Schema({
  name: {
    type: String,
    required: true,
  },
  
  Disease: {
    type: String,
    required: true,
  },
  password: {
    type: Number,
    required: true,
  },
  age: {
    type: Number,
    required: true,
  },
  phnno: {
    type: Number,
    required: true,
  },

  gender: {
    type: String,
    required: true,
  },
  priority: {
    type: String,
    required: true,
  },
  impact: {
    type: String,
    required: true,
  },
},

{timestamps : true});

userSchema.pre(
  'save',
  async function (next) {
      const user = this;
      const hash = await bcrypt.hash(this.password, 10);

      this.password = hash;
      next();
  }
);

// You will also need to make sure that the user trying to log in has the correct credentials. Add the following new method:
userSchema.methods.isValidPassword = async function(password) {
  const user = this;
  const compare = await bcrypt.compare(password, user.password);

  return compare;
}

const User = mongoose.model('User', userSchema);

module.exports = User;