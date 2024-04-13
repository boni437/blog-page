import mongoose, { Schema } from "mongoose";

const postSchema = new mongoose.Schema({
    // postId:{
    //     type: String,
    //     required: true,
    // },
    title:{
        type: String,
        required: true,
    },
    author:{
        type: String,
        required: true,
    },
    image:{
        type: String,
    },
    description:{
        type: String,
        required: true,
    },
   
}, {timestamps: true}
);

const Post = mongoose.model("Post", postSchema);

export default Post;