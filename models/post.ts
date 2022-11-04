import { Schema, model, models } from 'mongoose';
import { IPostStatus } from './PostStatus';

const postSchema = new Schema({
    craeteDate: {
        type: Date,
        required: true
    },
    publishDate: {
        type: Date,
        default: null
    },
    updateDate: {
        type: Date,
        default: null
    },
    title: {
        type: String,
        required: true
    },
    shortDescription: {
        type: String,
        required: true
    },
    content: {
        type: String,
        required: true
    },
    status: {
        type: String,
        enum: IPostStatus,
        required: true
    },
    authorName: {
        type: String,
        require: true
    }
});

const Post = models.Post || model('Post', postSchema);

export default Post;