import { NextApiRequest, NextApiResponse } from "next";
import connectMongo from "../../../lib/mongodb";
import Post from "../../../models/post"

export default async function handler(
    req: NextApiRequest,
    res: NextApiResponse
) {

    switch (req.method) {
        case 'GET':
            return getPost(req, res)
        case 'PUT':
            return updatePost(req, res)
        case 'DELETE':
            return deletePost(req, res)
        default:
            res.setHeader('Allow', ['GET', 'PUT', 'DELETE']);
            res.status(405).end(`Method ${req.method} Not Allowed`);
            break;
    }
}

async function getPost(req: NextApiRequest, res: NextApiResponse<any>) {
    try {
        await connectMongo()

        const post = await Post.findOne({ "_id": req.query.postId?.toString() });

        return res.json({
            data: JSON.parse(JSON.stringify(post)),
            success: true,
        });

    } catch (error) {
        return res.json({
            message: "something went wrong",
            success: false,
        });
    }
}

function updatePost(req: NextApiRequest, res: NextApiResponse<any>) {
    throw new Error("Function not implemented.");
}


function deletePost(req: NextApiRequest, res: NextApiResponse<any>) {
    throw new Error("Function not implemented.");
}