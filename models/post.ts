import { Schema, model, models } from 'mongoose';

const postSchema = new Schema({
    title: String,
    content: String
});

const Post = models.Post || model('Post', postSchema);

export default Post;