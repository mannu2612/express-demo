import mongoose from 'mongoose';

const { Schema } = mongoose;

const schema = new Schema({
  email: {
    type: String
  },
  name: {
    type: String
  }
});

const User = mongoose.model('User', schema);
export default User;