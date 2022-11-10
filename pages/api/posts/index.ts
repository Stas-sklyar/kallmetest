import { NextApiRequest, NextApiResponse } from "next";
import connectMongo from "../../../lib/mongodb";
import Post from "../../../models/post";
import { IPostStatus } from "../../../models/PostStatus";

export default async function handler(
    req: NextApiRequest,
    res: NextApiResponse
) {
    switch (req.method) {
        case 'GET':
            return getPosts(req, res)
        case 'POST':
            return createPost(req, res)
        default:
            res.setHeader('Allow', ['GET', 'POST']);
            res.status(405).end(`Method ${req.method} Not Allowed`);
            break;
    }
}

async function getPosts(req: NextApiRequest, res: NextApiResponse<any>) {
    try {
        await connectMongo()

        let params = {}

        if (req.query.email) Object.assign(params, { authorEmail: req.query.email })

        const posts = await Post.find(params)

        return res.json({
            data: JSON.parse(JSON.stringify(posts)),
            success: true,
        });

    } catch (error) {
        return res.json({
            message: new Error(error).message,
            success: false,
        });
    }
}


async function createPost(req: NextApiRequest, res: NextApiResponse<any>) {
    try {
        await connectMongo()

        const newPost = new Post({
            ...req.body,
            craeteDate: new Date(),
            status: IPostStatus.PUBLISHED,
            publishDate: new Date()
        })

        await newPost.save()

        return res.json({
            message: "Post successfully created!",
            success: true,
        });

    } catch (error) {
        return res.json({
            message: new Error(error).message,
            success: false,
        });
    }
}
