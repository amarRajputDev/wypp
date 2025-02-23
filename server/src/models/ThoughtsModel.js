import mongoose from 'mongoose';

const thoughtSchema = new mongoose.Schema({
    content: { type: String, required: true, maxlength: 280 }, // Max 280 chars
    user: { type: mongoose.Schema.Types.ObjectId, ref: "User", required: true }, // Reference to User
    likes: [{ type: mongoose.Schema.Types.ObjectId, ref: "User" }], // Users who liked the tweet
    comments: [{ type: mongoose.Schema.Types.ObjectId, ref: "Comment" }], // Array of comment IDs
},{timestamps:true});

const Thought = mongoose.model('Thought', thoughtSchema);

export default Thought;
