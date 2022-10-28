import { NextApiRequest, NextApiResponse } from "next";
import connectMongo from "../../../lib/mongodb";
import Post from "../../../models/post";

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

        const posts = await Post.find();

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

        await Post.create(req.body)

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
