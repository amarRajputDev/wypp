import mongoose from 'mongoose';

const userSchema = new mongoose.Schema({
  username: {
    type: String,
    required: true,
    unique: true
  },
  email: {
    type: String,
    required: true,
    unique: true
  },
  password: {
    type: String,
    required: true
  },
  fullName: {
    type: String,
    required: true,
  },
  profilePic :{
    type:String
  },
  gender: {
    type: String,
    required: true,
    enum : ["male" , "female" , "others"]
  },
  age: {
    type: Number,
    required: true,
  },
  collegeName: {
    type: String,
    required: true,
  },
  Course: {
    duration: {
      type: String,
      required: true,
    },
    currentYear: {
      type: Number,
      required: true,
    },
    courseName: {
        type:String,
        required:true
    }
  },
  intrests: [{
    type: String,
  }],
  personality: {
    type: String,
    required: true,
  },
  thoughts: [{ type: mongoose.Schema.Types.ObjectId, ref: "thoughts" }], // Array of tweet IDs
  comments: [{ type: mongoose.Schema.Types.ObjectId, ref: "Comment" }],
},{timestamps:true});

const User = mongoose.model('User', userSchema);

export default User;

