const mongoose = require('mongoose')
const userSchmea = new mongoose.Schmea({
  username: {
    type: String,
    required: true,
    min: 5,
    max: 25
  },
  password: {
    type: String,
    required: true,
    min: 50,
    max: 200
  }
})
userSchema.pre('save', async function (next) {
    const salt = await bcrypt.genSalt(10);
    const hashed = await bcrypt.hash(this.password, salt);

    this.password = hashed;

    next();
});

userSchema.methods.genAuthToken = function () {
  const token = jwt.sign(this.toJSON(), config.SECRET_KEY)
  console.log('token: ', token)
  
  return token;
};

userSchema.methods.checkPassword = function(password) {
  return bcrypt.compare(password, this.password)
}




module.exports = user = mongoose.model('user', userSchmea);
