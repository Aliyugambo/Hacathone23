const mongoose = require('mongoose')
const bcrypt = require('bcrypt')


const userSchema = new mongoose.Schema({
  firstName: {
    type: String,
    required: true,
  },
  
  lastName: {
    type: String,
    required: true,
  },
  
  username: {
    type: String,
    required: true,
    unique: true,
  },
  
  email: {
    type: String,
    required: true,
    unique: true,
  },
  
  password: {
    type: String,
    required: true,
  },
  DOB: {
    type: Date,
    required: true,
  },
  patientHeight: {
    type: Number,
    required: true,
  },
  patientWeight73: {
    type: Number,
    required: true,
  },
  reasonFor50: {
    type: String,
    required: true,
  },
  pleaseList: [{
    type: String,
    required: true,
  }],
  illnesses: {
    type: String,
    required: true,
  },
  otherIllnesses: {
    type: String,
    required: true,
  },
  OperationList69: [{
    type: String,
    required: true,
  }],
  MedicationsList68: [{
    type: String,
    required: true,
  }],
  
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