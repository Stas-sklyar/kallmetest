import { ObjectId } from "mongodb";
import { NextApiRequest, NextApiResponse } from "next";
import { connectToDatabase } from "../../../lib/mongodb";

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
        let { db } = await connectToDatabase();
        let post = db.collection("next-app-colection").find(ObjectId("4ecc05e55dd98a436ddcc47c")) 
        return res.json({
            message: JSON.parse(JSON.stringify(post)),
            success: true,
        });
    } catch (error) {
        return res.json({
            message: new Error(error).message,
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
